# 🧩 My Portfolio Backend

A **TypeScript + Express** backend API for a personal portfolio website, built with **Prisma ORM**, **JWT authentication**, and **Cloudinary** image management. This backend handles user data, authentication, file uploads, and serves as the API layer for the frontend hosted on Vercel.

---

## 📚 Table of Contents

* [Introduction](#-introduction)
* [Features](#-features)
* [Tech Stack](#-tech-stack)
* [Project Structure](#-project-structure)
* [Installation](#-installation)
* [Environment Variables](#-environment-variables)
* [Scripts](#-scripts)
* [Usage](#-usage)
* [API Modules](#-api-modules)
* [Error Handling](#-error-handling)
* [Deployment](#-deployment)
* [Troubleshooting](#-troubleshooting)
* [Contributors](#-contributors)
* [License](#-license)

---

## 🚀 Introduction

**My Portfolio Backend** is a modular and scalable Node.js backend built with **TypeScript**. It provides RESTful APIs to manage portfolio data (users, projects, images, etc.) and supports authentication, file uploads, and secure communication between frontend and backend services.

The app is deployed on **Vercel**:
🔗 [https://my-portfolio-backend-tan-five.vercel.app](https://my-portfolio-backend-tan-five.vercel.app)

---

## ✨ Features

* 🔐 **JWT Authentication** for secure user sessions
* 🧩 **Modular Architecture** (controllers, services, routes, middleware)
* ☁️ **Cloudinary Integration** for image uploads
* 🗃️ **Prisma ORM** for database management
* ⚙️ **TypeScript** for type safety
* 🧱 **Error Handling Middleware** for consistent API responses
* 🧰 **Environment-based configuration** with `.env`
* 🚀 **Vercel-ready** deployment setup

---

## 🧠 Tech Stack

**Backend Framework:** Express (TypeScript)
**Database ORM:** Prisma
**Authentication:** JWT + bcrypt
**File Uploads:** Multer + Cloudinary
**Environment Management:** dotenv
**Deployment:** Vercel

---

## 🏗️ Project Structure

```
project-root/
├─ src/
│  ├─ app.ts                 # Express app setup
│  ├─ server.ts              # Server entry point
│  ├─ config/
│  │  ├─ db.ts               # Prisma client / DB connection
│  │  └─ env.ts              # Environment variable loader
│  ├─ errors/
│  │  └─ ApiError.ts         # Custom API error handler
│  ├─ interface/
│  │  └─ user.interface.ts   # TypeScript interfaces
│  ├─ middleware/
│  │  ├─ auth.middleware.ts  # JWT authentication middleware
│  │  └─ error.middleware.ts # Global error handler
│  ├─ modules/
│  │  └─ user/
│  │     ├─ controller/user.controller.ts
│  │     ├─ model/user.model.ts
│  │     ├─ service/user.service.ts
│  │     └─ route/user.route.ts
│  ├─ route/
│  │  └─ index.ts            # Combine module routes
│  └─ utils/
│     └─ helpers.ts          # Utility functions
├─ .env
├─ package.json
├─ tsconfig.json
└─ vercel.json
```

---

## ⚙️ Installation

### Prerequisites

* Node.js ≥ 18
* npm or yarn
* A database connection URL (e.g., PostgreSQL)
* Cloudinary account for image uploads

### Steps

```bash
# Clone the repo
git clone https://github.com/istiak19/my-portfolio-backend
cd my-portfolio-backend

# Install dependencies
npm install

# Setup Prisma
npx prisma generate

# Build TypeScript
npm run build

# Start server
npm start
```

---

## 🔧 Environment Variables

Create a `.env` file in the project root with the following:

```env
PORT=5000
DATABASE_URL="your_database_connection_string"
JWT_SECRET="your_jwt_secret"
CLOUDINARY_CLOUD_NAME="your_cloudinary_name"
CLOUDINARY_API_KEY="your_cloudinary_api_key"
CLOUDINARY_API_SECRET="your_cloudinary_api_secret"
```

---

## 🧾 Scripts

| Command               | Description                              |
| --------------------- | ---------------------------------------- |
| `npm run dev`         | Start development server with hot reload |
| `npm run build`       | Compile TypeScript to JavaScript         |
| `npm start`           | Run compiled production build            |
| `npm run postinstall` | Generate Prisma client                   |

---

## 💻 Usage

Once running, the API will be available at:

```
http://localhost:5000
```

Example routes might include:

* `POST /api/users/register` – Register a new user
* `POST /api/users/login` – Login user and get token
* `GET /api/users/profile` – Fetch logged-in user info

---

## 🧩 API Modules

| Module                                  | Description                                                |
| --------------------------------------- | ---------------------------------------------------------- |
| **User Module**                         | Handles authentication, user profiles, and CRUD operations |
| *(More modules can be added as needed)* |                                                            |

---

## 🚨 Error Handling

All errors are processed by `error.middleware.ts` and returned in a consistent JSON format:

```json
{
  "status": "error",
  "message": "Invalid credentials"
}
```

---

## ☁️ Deployment

This project is ready for **Vercel** deployment.
Ensure your environment variables are configured in the Vercel dashboard before deploying.

---

## 🧩 Troubleshooting

* **Database not connecting:** Check your `DATABASE_URL` in `.env`.
* **Cloudinary upload failing:** Verify your Cloudinary credentials.
* **JWT errors:** Ensure `JWT_SECRET` is defined in your `.env`.

---

## 👨‍💻 Contributors

* **Istiak** – Developer & Maintainer