# JWT-AUTH

A full-stack MERN (MongoDB, Express, React, Node.js) authentication system using JSON Web Tokens (JWT) for secure user login, registration, and protected routes.

---

## Table of Contents

* [Project Overview](#project-overview)
* [File Structure](#file-structure)
* [Backend](#backend)
* [Frontend](#frontend)
* [Installation](#installation)
* [Usage](#usage)
* [Environment Variables](#environment-variables)
* [Screenshot](#screenshot)
* [License](#license)

---

## Project Overview

This project demonstrates a typical full-stack JavaScript application with a clear separation between the backend server and frontend client. The backend handles authentication, user management, and API routes, while the frontend provides a user interface for login, registration, and accessing protected content.

---

## File Structure

```
JWT-AUTH/
│
├── backend/          # Node.js/Express server
├── client/           # Frontend React application
├── .gitignore        # Git ignore file
├── README.md         # Project documentation
└── Screenshot.png    # Directory structure screenshot
```

---

## Backend (`backend/`)

The backend is built with Node.js and Express.

```
backend/
├── config/          # Database connection and config files
├── controller/      # Request handlers (Controllers)
├── middleware/      # Middleware functions (e.g., authentication)
├── model/           # Data models and schemas
├── router/          # API routes
├── node_modules/    # Backend dependencies (not committed)
├── .env             # Environment variables (not committed)
├── .env.example     # Example env file
├── app.js           # Main backend entry point
└── package.json     # Backend dependencies and scripts
```

---

## Frontend (`client/`)

The frontend is built with React and styled with Tailwind CSS.

```
client/
├── dist/            # Production-ready build
├── node_modules/    # Frontend dependencies (not committed)
├── public/          # Static assets (index.html, images)
├── src/             # Source code (components, pages)
├── .env             # Environment variables for frontend
├── .env.example     # Example env file
├── package.json     # Frontend dependencies and scripts
├── postcss.config.js
└── tailwind.config.js
```

---

## Installation

### Backend

```bash
cd backend
npm install
```

### Frontend

```bash
cd client
npm install
```

---

## Usage

### Start Backend

```bash
cd backend
npm start
```

### Start Frontend

```bash
cd client
npm start
```

The frontend will run on `http://localhost:3000` and the backend on `http://localhost:5000` (default).

---

## Environment Variables

Create a `.env` file in both `backend` and `client` using the `.env.example` templates.

**Backend Example**

```
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```

**Frontend Example**

```
REACT_APP_API_URL=http://localhost:5000/api
```

---


---

## License

MIT License
