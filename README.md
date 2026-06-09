# Task Manager Pro

A full-stack task management web application built with Node.js, Express.js, MongoDB Atlas, and Bootstrap 5. Users can register, log in, and manage their tasks with full CRUD support, priority tracking, due dates, and a live productivity dashboard.

---

## Table of Contents

- [Live Demo](#live-demo)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [API Reference](#api-reference)
- [Project Structure](#project-structure)
- [Screenshots](#screenshots)
- [Future Enhancements](#future-enhancements)
- [License](#license)

---

## Live Demo

🔗 [https://task-manager-pro.onrender.com](https://task-manager-pro.onrender.com)

> Hosted on Render. The instance may spin down after inactivity — allow 30 seconds for a cold start.

---

## Features

- **Authentication** — Register and log in securely; passwords hashed with bcrypt.js; sessions managed via JWT
- **Dashboard** — Live stats for Total, Pending, Completed, and High Priority tasks
- **Task CRUD** — Create, read, update, and delete tasks; each task is private to its owner
- **Priority Levels** — Low / Medium / High with colour-coded badges
- **Status Tracking** — Open / In Progress / Completed
- **Due Dates** — Optional due date per task with visual indicators
- **Search** — Real-time client-side search across task titles and descriptions
- **Filters** — Filter by status and priority, independently or combined
- **Responsive Design** — Works on desktop, tablet, and mobile via Bootstrap 5

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | HTML5, CSS3, Bootstrap 5, JavaScript (ES6+) |
| Backend | Node.js, Express.js |
| Database | MongoDB Atlas, Mongoose ODM |
| Authentication | JWT (jsonwebtoken), bcrypt.js |
| Deployment | Render (backend + frontend), GitHub |

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- [npm](https://www.npmjs.com/) v9 or higher
- A [MongoDB Atlas](https://www.mongodb.com/atlas) cluster (free tier works fine)

### 1. Clone the repository

```bash
git clone https://github.com/your-username/task-manager-pro.git
cd task-manager-pro
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the project root (see [Environment Variables](#environment-variables) below).

### 4. Start the development server

```bash
npm run dev
```

The app will be available at `http://localhost:5000`.

### 5. Build for production

```bash
npm start
```

---

## Environment Variables

Create a `.env` file in the root directory with the following keys:

```env
# MongoDB Atlas connection string
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/taskmanager?retryWrites=true&w=majority

# JWT secret — use a long, random string in production
JWT_SECRET=your_super_secret_key_here

# JWT expiry window
JWT_EXPIRES_IN=7d

# Server port (optional — defaults to 5000)
PORT=5000
```

> ⚠️ Never commit your `.env` file. It is already included in `.gitignore`.

---

## API Reference

All task endpoints require a valid JWT in the `Authorization` header:

```
Authorization: Bearer <token>
```

### Auth

| Method | Endpoint | Auth | Body | Description |
|---|---|---|---|---|
| `POST` | `/api/auth/register` | None | `name`, `email`, `password` | Register a new user |
| `POST` | `/api/auth/login` | None | `email`, `password` | Log in; returns JWT |

### Tasks

| Method | Endpoint | Auth | Body | Description |
|---|---|---|---|---|
| `GET` | `/api/tasks` | JWT | — | Get all tasks for the current user |
| `POST` | `/api/tasks` | JWT | See below | Create a new task |
| `GET` | `/api/tasks/:id` | JWT | — | Get a single task by ID |
| `PUT` | `/api/tasks/:id` | JWT | See below | Update a task by ID |
| `DELETE` | `/api/tasks/:id` | JWT | — | Delete a task by ID |

#### Task body fields

```json
{
  "title": "Finish project report",
  "description": "Complete all sections and export as PDF",
  "status": "In Progress",
  "priority": "High",
  "dueDate": "2026-06-15"
}
```

| Field | Type | Required | Values |
|---|---|---|---|
| `title` | String | Yes | Max 120 characters |
| `description` | String | No | Free text |
| `status` | String | No | `Open` · `In Progress` · `Completed` |
| `priority` | String | No | `Low` · `Medium` · `High` |
| `dueDate` | Date | No | ISO 8601 (`YYYY-MM-DD`) |

---

## Project Structure

```
task-manager-pro/
├── config/
│   └── db.js               # MongoDB Atlas connection
├── middleware/
│   └── auth.js             # JWT verification middleware
├── models/
│   ├── User.js             # Mongoose User schema
│   └── Task.js             # Mongoose Task schema
├── routes/
│   ├── auth.js             # Register & login routes
│   └── tasks.js            # CRUD routes for tasks
├── public/
│   ├── index.html          # Application shell
│   ├── css/
│   │   └── style.css       # Custom styles
│   └── js/
│       └── app.js          # Frontend logic & API calls
├── .env                    # Environment variables (not committed)
├── .gitignore
├── package.json
├── server.js               # Express app entry point
└── README.md
```

---

## Future Enhancements

- [ ] Real-time updates via WebSockets (Socket.io)
- [ ] Email notifications for due-date reminders (SendGrid)
- [ ] Team workspaces with role-based access control
- [ ] Kanban drag-and-drop board view
- [ ] Google Calendar two-way sync
- [ ] Advanced analytics and completion-rate charts
- [ ] File attachments per task (AWS S3 / Cloudinary)
- [ ] Light / dark mode toggle
- [ ] React Native mobile app
- [ ] CSV / PDF export

---

## License

This project is licensed under the [MIT License](LICENSE).

---

> Built as a full-stack learning project. Contributions and feedback welcome — open an issue or submit a pull request.
