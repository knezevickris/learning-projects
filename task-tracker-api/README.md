# Task Manager REST API

A clean, light-weight Task Management API built with **Node.js**, **Express**, and **SQLite**.

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm

### Installation
1. Navigate to the project folder:
   ```bash
   cd task-tracker-api
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Running the API
- **Development mode** (with auto-reload):
  ```bash
  npm run dev
  ```
- **Production mode**:
  ```bash
  npm start
  ```
The server will start on `http://localhost:3000`.

---

## 🔌 API Endpoints

### 📝 Tasks

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/tasks` | Get all tasks (supports `status` and `priority` filters) |
| `GET` | `/tasks/:id` | Get a specific task by ID |
| `POST` | `/tasks` | Create a new task |
| `PUT` | `/tasks/:id` | Update an existing task |
| `DELETE` | `/tasks/:id`| Delete a task |

### Filtering Examples
- `GET /tasks?status=todo`
- `GET /tasks?priority=high`
- `GET /tasks?status=in-progress&priority=medium`

### Request Body (POST/PUT)
```json
{
  "title": "Finish the API",
  "description": "Complete phase 6 of the project",
  "status": "todo", 
  "priority": "high"
}
```
*Note: `title` is required for creating a task.*

---

## 🛠 Tech Stack
- **Framework**: Express.js
- **Database**: SQLite (via `better-sqlite3`)
- **Utility**: Nodemon (dev only)
- **Validation**: Manual input checks + SQLite CHECK constraints
