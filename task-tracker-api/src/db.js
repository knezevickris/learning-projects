const Database = require('better-sqlite3');
const path = require('path');

// Connect to the database file (created if it doesn't exist)
const dbPath = path.resolve(__dirname, '../tasks.db');
const db = new Database(dbPath);

// Create the tasks table if it doesn't already exist
db.exec(`
  CREATE TABLE IF NOT EXISTS tasks (
    id          INTEGER PRIMARY KEY AUTOINCREMENT,
    title       TEXT    NOT NULL,
    description TEXT,
    status      TEXT    NOT NULL DEFAULT 'todo'     CHECK(status IN ('todo','in-progress','done')),
    priority    TEXT    NOT NULL DEFAULT 'medium'   CHECK(priority IN ('low','medium','high')),
    created_at  TEXT    NOT NULL DEFAULT (datetime('now')),
    updated_at  TEXT    NOT NULL DEFAULT (datetime('now'))
  );
`);

console.log('Database initialized successfully.');

module.exports = db;
