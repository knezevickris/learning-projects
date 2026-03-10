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

module.exports = router;
