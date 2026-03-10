const express = require('express');
const db = require('../db');
const router = express.Router();

// GET /tasks - Returns all tasks (with optional filters)
router.get('/', (req, res) => {
    const { status, priority } = req.query;
    let query = 'SELECT * FROM tasks';
    const params = [];

    const conditions = [];
    if (status) {
        conditions.push('status = ?');
        params.push(status);
    }
    if (priority) {
        conditions.push('priority = ?');
        params.push(priority);
    }

    if (conditions.length > 0) {
        query += ' WHERE ' + conditions.join(' AND ');
    }

    try {
        const tasks = db.prepare(query).all(params);
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// GET /tasks/:id - Returns a single task by ID
router.get('/:id', (req, res) => {
    const { id } = req.params;
    try {
        const task = db.prepare('SELECT * FROM tasks WHERE id = ?').get(id);
        if (!task) {
            return res.status(404).json({ error: 'Task not found' });
        }
        res.json(task);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// POST /tasks - Creates a new task
router.post('/', (req, res) => {
    const { title, description, status, priority } = req.body;

    if (!title || typeof title !== 'string' || title.trim() === '') {
        return res.status(400).json({ error: 'title is required and must be a non-empty string' });
    }

    try {
        const stmt = db.prepare(`
      INSERT INTO tasks (title, description, status, priority)
      VALUES (?, ?, ?, ?)
    `);

        const info = stmt.run(
            title,
            description || null,
            status || 'todo',
            priority || 'medium'
        );

        const newTask = db.prepare('SELECT * FROM tasks WHERE id = ?').get(info.lastInsertRowid);
        res.status(201).json(newTask);
    } catch (err) {
        // If it's a constraint violation (like invalid status/priority), return 400
        if (err.message.includes('CHECK constraint failed')) {
            return res.status(400).json({ error: 'Invalid status or priority value' });
        }
        res.status(500).json({ error: err.message });
    }
});

// PUT /tasks/:id - Updates an existing task
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { title, description, status, priority } = req.body;

    try {
        // First, check if task exists
        const task = db.prepare('SELECT * FROM tasks WHERE id = ?').get(id);
        if (!task) {
            return res.status(404).json({ error: 'Task not found' });
        }

        // Prepare update values (fall back to current values if not provided)
        const updatedTitle = title !== undefined ? title : task.title;
        const updatedDescription = description !== undefined ? description : task.description;
        const updatedStatus = status !== undefined ? status : task.status;
        const updatedPriority = priority !== undefined ? priority : task.priority;

        // Validate title if it was provided
        if (title !== undefined && (!title || typeof title !== 'string' || title.trim() === '')) {
            return res.status(400).json({ error: 'title cannot be empty' });
        }

        const stmt = db.prepare(`
      UPDATE tasks 
      SET title = ?, description = ?, status = ?, priority = ?, updated_at = (datetime('now'))
      WHERE id = ?
    `);

        stmt.run(updatedTitle, updatedDescription, updatedStatus, updatedPriority, id);

        const updatedTask = db.prepare('SELECT * FROM tasks WHERE id = ?').get(id);
        res.json(updatedTask);
    } catch (err) {
        if (err.message.includes('CHECK constraint failed')) {
            return res.status(400).json({ error: 'Invalid status or priority value' });
        }
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
