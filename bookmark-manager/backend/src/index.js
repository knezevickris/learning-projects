require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Helper to format bookmark for response
const formatBookmark = (bookmark) => {
    if (!bookmark) return null;
    return {
        ...bookmark,
        tags: bookmark.tags ? JSON.parse(bookmark.tags) : [],
        is_favorite: !!bookmark.is_favorite
    };
};

// POST /bookmarks
app.post('/bookmarks', (req, res) => {
    if (!req.body) {
        return res.status(400).json({ error: 'Request body is missing. Ensure you set Content-Type to application/json in Postman.' });
    }
    const { url, title, description, tags, is_favorite } = req.body;

    if (!url || !title) {
        return res.status(400).json({ error: 'URL and Title are required' });
    }

    // Basic URL validation
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
        return res.status(400).json({ error: 'URL must start with http:// or https://' });
    }

    // Tag validation
    if (tags && !Array.isArray(tags)) {
        return res.status(400).json({ error: 'Tags must be an array' });
    }

    const query = `
    INSERT INTO bookmarks (url, title, description, tags, is_favorite)
    VALUES (?, ?, ?, ?, ?)
  `;
    const params = [
        url,
        title,
        description || '',
        JSON.stringify(tags || []),
        is_favorite ? 1 : 0
    ];

    db.run(query, params, function (err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        db.get('SELECT * FROM bookmarks WHERE id = ?', [this.lastID], (err, row) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.status(201).json(formatBookmark(row));
        });
    });
});

// GET /bookmarks
app.get('/bookmarks', (req, res) => {
    const { tag, favorite } = req.query;
    let query = 'SELECT * FROM bookmarks';
    const params = [];

    const conditions = [];
    if (tag) {
        conditions.push('tags LIKE ?');
        params.push(`%"${tag}"%`);
    }
    if (favorite === 'true') {
        conditions.push('is_favorite = 1');
    }

    if (conditions.length > 0) {
        query += ' WHERE ' + conditions.join(' AND ');
    }

    query += ' ORDER BY created_at DESC';

    db.all(query, params, (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(rows.map(formatBookmark));
    });
});

// GET /bookmarks/search?q=
app.get('/bookmarks/search', (req, res) => {
    const { q } = req.query;
    if (!q) {
        return res.status(400).json({ error: 'Search query is required' });
    }

    const query = `
    SELECT * FROM bookmarks 
    WHERE title LIKE ? OR description LIKE ? 
    ORDER BY created_at DESC
  `;
    const param = `%${q}%`;

    db.all(query, [param, param], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(rows.map(formatBookmark));
    });
});

// GET /bookmarks/search?q=
app.get('/bookmarks/search', (req, res) => {
    const { q } = req.query;
    if (!q) {
        return res.status(400).json({ error: 'Search query is required' });
    }

    const query = `
    SELECT * FROM bookmarks 
    WHERE title LIKE ? OR description LIKE ? 
    ORDER BY created_at DESC
  `;
    const param = `%${q}%`;

    db.all(query, [param, param], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(rows.map(formatBookmark));
    });
});

// PUT /bookmarks/:id
app.put('/bookmarks/:id', (req, res) => {
    const { id } = req.params;
    const { url, title, description, tags, is_favorite } = req.body;

    // First, get the existing bookmark to merge with provided fields
    db.get('SELECT * FROM bookmarks WHERE id = ?', [id], (err, row) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (!row) {
            return res.status(404).json({ error: 'Bookmark not found' });
        }

        const updatedUrl = url !== undefined ? url : row.url;
        const updatedTitle = title !== undefined ? title : row.title;
        const updatedDescription = description !== undefined ? description : row.description;
        const updatedTagsRaw = tags !== undefined ? tags : (row.tags ? JSON.parse(row.tags) : []);
        const updatedIsFavorite = is_favorite !== undefined ? (is_favorite ? 1 : 0) : row.is_favorite;

        // Validation for partial updates
        if (url !== undefined && !updatedUrl.startsWith('http://') && !updatedUrl.startsWith('https://')) {
            return res.status(400).json({ error: 'URL must start with http:// or https://' });
        }

        if (tags !== undefined && !Array.isArray(tags)) {
            return res.status(400).json({ error: 'Tags must be an array' });
        }

        const query = `
      UPDATE bookmarks 
      SET url = ?, title = ?, description = ?, tags = ?, is_favorite = ?
      WHERE id = ?
    `;
        const params = [
            updatedUrl,
            updatedTitle,
            updatedDescription,
            JSON.stringify(updatedTagsRaw),
            updatedIsFavorite,
            id
        ];

        db.run(query, params, function (err) {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            db.get('SELECT * FROM bookmarks WHERE id = ?', [id], (err, row) => {
                if (err) {
                    return res.status(500).json({ error: err.message });
                }
                res.json(formatBookmark(row));
            });
        });
    });
});

// DELETE /bookmarks/:id
app.delete('/bookmarks/:id', (req, res) => {
    const { id } = req.params;
    db.run('DELETE FROM bookmarks WHERE id = ?', [id], function (err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (this.changes === 0) {
            return res.status(404).json({ error: 'Bookmark not found' });
        }
        res.status(204).send();
    });
});

// GET /tags
app.get('/tags', (req, res) => {
    db.all('SELECT tags FROM bookmarks', (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        const tagCounts = {};
        rows.forEach(row => {
            if (row.tags) {
                try {
                    const tags = JSON.parse(row.tags);
                    tags.forEach(tag => {
                        tagCounts[tag] = (tagCounts[tag] || 0) + 1;
                    });
                } catch (e) {
                    console.error('Error parsing tags JSON:', e);
                }
            }
        });

        const result = Object.entries(tagCounts).map(([name, count]) => ({ name, count }));
        res.json(result);
    });
});

app.get('/', (req, res) => {
    res.send('Bookmark Manager API is running');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
