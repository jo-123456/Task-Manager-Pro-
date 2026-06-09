## Live Demo

https://task-manager-pro-g0lp.onrender.com

## GitHub Repository

https://github.com/jo-123456/Task-Manager-Pro-
# Task Manager Pro

A modern full-stack Task Management Application built with Node.js, Express.js, MongoDB, and Bootstrap. Users can register, log in, create tasks, manage priorities, track due dates, and monitor progress through an interactive dashboard.

## Features

### Authentication

* User Registration
* User Login
* JWT Authentication
* Protected Routes

### Task Management

* Create Tasks
* View Tasks
* Update Tasks
* Delete Tasks
* Task Status Tracking
* Task Priority Levels
* Due Date Management

### Dashboard

* Professional Dark Theme
* Statistics Cards
* Search Tasks
* Filter by Status
* Filter by Priority
* Responsive Design
* Analytics Section
* Sidebar Navigation

## Tech Stack

### Frontend

* HTML5
* CSS3
* Bootstrap 5
* JavaScript

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas
* Mongoose

### Authentication

* JSON Web Token (JWT)
* bcrypt.js

## Project Structure

```text
Task-Manager-Pro
│
├── middleware
│   └── auth.js
│
├── models
│   ├── User.js
│   └── Task.js
│
├── routes
│   ├── auth.js
│   └── task.js
│
├── public
│   ├── login.html
│   ├── register.html
│   └── dashboard.html
│
├── .env
├── server.js
├── package.json
└── README.md
```

## Installation

### Clone Repository

```bash
git clone https://github.com/jo-123456/Task-Manager-Pro-.git
```

### Move into Project Directory

```bash
cd Task-Manager-Pro-
```

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env` file:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

### Run Application

```bash
npm start
```

or

```bash
node server.js
```

Application will run at:

```text
http://localhost:5000
```

## Screenshots

### Login Page

Secure authentication system for users.

### Dashboard

Interactive dashboard displaying:

* Total Tasks
* Completed Tasks
* Pending Tasks
* High Priority Tasks

### Task Management

Users can:

* Add Tasks
* Update Tasks
* Delete Tasks
* Assign Priorities
* Set Due Dates

## Future Enhancements

* Real-Time Updates using WebSockets
* Email Notifications
* Team Collaboration
* Drag-and-Drop Task Management
* Calendar Integration
* Dark/Light Theme Toggle
* Data Export Features

## Author

Jonsia Cejohn

## License

This project is developed for learning purposes and internship project submission.
