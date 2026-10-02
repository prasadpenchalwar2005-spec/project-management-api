# Project Management API

A secure REST API backend for a Project and Task Management System built with Node.js, Express.js, MongoDB and Mongoose.

## Features

- User registration and login
- JWT-based authentication
- Password hashing with bcrypt
- Project management CRUD APIs
- Task management CRUD APIs
- Task pagination, sorting and filtering
- Task activity history
- Joi request validation
- Centralized error handling
- MongoDB indexing
- MVC architecture
- RESTful API design

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs
- Joi
- CORS

## Project Structure

```text
project-management-api/
├── src/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   ├── project.controller.js
│   │   ├── task.controller.js
│   │   └── activity.controller.js
│   ├── middleware/
│   │   ├── auth.middleware.js
│   │   ├── error.middleware.js
│   │   └── validation.middleware.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Project.js
│   │   ├── Task.js
│   │   └── Activity.js
│   ├── routes/
│   │   ├── auth.routes.js
│   │   ├── project.routes.js
│   │   └── task.routes.js
│   ├── validations/
│   │   ├── auth.validation.js
│   │   ├── project.validation.js
│   │   └── task.validation.js
│   └── utils/
│       └── generateToken.js
├── .env
├── .env.example
├── .gitignore
├── server.js
├── package.json
└── README.md

