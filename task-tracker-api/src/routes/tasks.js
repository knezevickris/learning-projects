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

module.exports = router;
