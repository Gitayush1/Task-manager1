# Task Management Application

This is a full-stack task management application built using React for the frontend and Node.js with Express for the backend. The app allows users to register, log in, and manage their tasks. The tasks can be added, marked as complete, deleted, and filtered by status (All, Active, Completed). The app uses JWT authentication for secure user login and management.

## Features
- User registration and login with email and password.
- CRUD operations for tasks (Create, Read, Update, Delete).
- Mark tasks as complete/incomplete.
- Filter tasks by status (All, Active, Completed).
- Priority management for tasks (Low, Medium, High).
- User-specific task management.
- JWT-based user authentication.

## Tech Stack
- **Frontend**: React.js, TailwindCSS (for styling), Axios (for API requests).
- **Backend**: Node.js, Express.js.
- **Database**: MongoDB.
- **Authentication**: JWT (JSON Web Token).
- **State Management**: React hooks (useState, useEffect, custom hooks).
  
## Database Schema

### User Model
{
  _id: ObjectId,
  name: String,
  email: { type: String, unique: true },
  password: String (hashed),
  createdAt: Date
}

### Task Model
{
  _id: ObjectId,
  title: String,
  description: String,
  status: { type: String, enum: ['active', 'completed'] },
  priority: { type: String, enum: ['low', 'medium', 'high'] },
  createdAt: Date,
  userId: ObjectId (reference to the user who created the task)
}

## Setup Instructions
### Backend Setup
## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/Task-manager1.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Task-manager
   ```
3. Install dependencies for both frontend and backend:
   ```bash
   cd frontend && npm install
   cd ../backend && npm install
   ```
4. Set up environment variables in `.env` (Refer to `.env.example` for required variables).
5. Start the development server:
   ```bash
   cd frontend && npm run dev
   cd ../backend && npm run dev
   ```

