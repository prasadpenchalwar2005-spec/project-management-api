# Project Management API

A secure REST API backend for a Project and Task Management System built with Node.js, Express.js, MongoDB, and Mongoose.

## Features

- User registration and login
- JWT-based authentication
- Password hashing with bcryptjs
- Project CRUD APIs
- Task CRUD APIs
- Task pagination, sorting, and filtering
- Task activity history
- Joi request validation
- Centralized error handling
- MongoDB indexing
- MVC architecture
- Postman API collection

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
├── postman/
│   └── collection.json
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
│   └── validations/
│       ├── auth.validation.js
│       ├── project.validation.js
│       └── task.validation.js
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
├── server.js
└── README.md
```

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/prasadpenchalwar2005-spec/project-management-api.git
cd project-management-api
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the project root.

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=1d
```

Do not commit `.env` to GitHub.

### 4. Run the Application

Development:

```bash
npm run dev
```

Production:

```bash
npm start
```

The API will run on:

```text
http://localhost:5000
```

## API Endpoints

### Authentication

| Method | Endpoint             | Description                 |
| ------ | -------------------- | --------------------------- |
| POST   | `/api/auth/register` | Register a new user         |
| POST   | `/api/auth/login`    | Login and receive JWT token |

### Projects

All project endpoints require authentication.

| Method | Endpoint            | Description    |
| ------ | ------------------- | -------------- |
| POST   | `/api/projects`     | Create project |
| GET    | `/api/projects`     | Get projects   |
| PUT    | `/api/projects/:id` | Update project |
| DELETE | `/api/projects/:id` | Delete project |

### Tasks

All task endpoints require authentication.

| Method | Endpoint                        | Description               |
| ------ | ------------------------------- | ------------------------- |
| POST   | `/api/tasks`                    | Create task               |
| GET    | `/api/tasks`                    | Get tasks                 |
| PUT    | `/api/tasks/:id`                | Update task               |
| DELETE | `/api/tasks/:id`                | Delete task               |
| GET    | `/api/tasks/:taskId/activities` | Get task activity history |

## Authentication

Protected endpoints require a JWT token:

```text
Authorization: Bearer <JWT_TOKEN>
```

The login API returns the JWT token after successful authentication.

## Task Query Features

The `GET /api/tasks` endpoint supports pagination, sorting, and filtering.

Example:

```text
GET /api/tasks?page=1&limit=10&sortBy=createdAt&sortOrder=desc
```

Supported filters:

```text
status
priority
projectId
assignedUser
```

Example:

```text
GET /api/tasks?status=TODO&priority=HIGH
```

## Activity History

Task status changes are recorded in the Activity collection.

Example:

```text
TODO → COMPLETED
```

Each activity stores:

- Task ID
- Action
- Old Value
- New Value
- Performed By
- Created Date

Retrieve task history:

```text
GET /api/tasks/:taskId/activities
```

## Database Schema

### User

- Name
- Email
- Password
- Role
- Created Date

### Project

- Title
- Description
- Created By
- Members
- Status

### Task

- Title
- Description
- Project ID
- Assigned User
- Priority
- Status
- Due Date

### Activity

- Task ID
- Action
- Old Value
- New Value
- Performed By
- Created Date

## MongoDB Indexing

Indexes are configured for frequently queried fields:

- Unique index on `User.email`
- Index on `Task.projectId`
- Index on `Task.assignedUser`
- Index on `Activity.taskId`

## Request Validation

Joi validation is implemented for:

- Authentication
- Projects
- Tasks

Invalid requests return a consistent validation error response.

## API Response Format

Successful response:

```json
{
  "success": true,
  "message": "Operation successful",
  "data": {}
}
```

Error response:

```json
{
  "success": false,
  "message": "Error message"
}
```

## Postman Collection

The Postman collection is included in:

```text
postman/collection.json
```

It contains requests for:

- Authentication
- Project CRUD
- Task CRUD
- Task activity history

Postman environment variables:

```text
baseUrl
token
projectId
taskId
userId
```

The JWT token is automatically stored after a successful login.

## Security

- JWT authentication for protected APIs
- Password hashing with bcryptjs
- Joi request validation
- Duplicate email validation
- Environment-based secrets
- `.env` excluded from Git
- Centralized error handling
