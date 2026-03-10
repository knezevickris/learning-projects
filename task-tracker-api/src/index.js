const express = require('express');
const db = require('./db');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Heartbeat route
app.get('/', (req, res) => {
    res.json({ message: 'Task Manager API is running' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
