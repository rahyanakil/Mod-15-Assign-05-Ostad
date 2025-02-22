# Backend Project

## Project Description

This is a simple backend project using **Node.js, Express, and JWT authentication**. The project includes a structured folder setup, API routes, controllers, and middleware.

## Features

- **Models, Controllers, Routes, and Middleware**
- **JWT Token Generation**
- **Basic API Endpoints**
- **Folder Structure for Scalability**

## Folder Structure

```
project-folder/
│── src/
│   ├── controllers/
│   │   ├── authController.js
│   ├── middleware/
│   │   ├── authMiddleware.js
│   ├── routes/
│   │   ├── authRoutes.js
│   ├── server.js
│── .env
│── package.json
│── README.md
```

## Installation & Setup

### 1️⃣ Clone the Repository

```sh
git clone <your-repository-url>
cd project-folder
```

### 2️⃣ Install Dependencies

```sh
npm install
```

### 3️⃣ Set Up Environment Variables

Create a `.env` file and add:

```env
PORT=5000
JWT_SECRET=your_secret_key
```

### 4️⃣ Run the Server

```sh
npx nodemon src/server.js
```

Or

```sh
node src/server.js
```

## API Endpoints

### `GET /api/auth/token`

Generates a **JWT Token**.

**Response:**

```json
{
  "token": "your_jwt_token_here"
}
```

### `POST /api/auth/post`

Returns a response body.

**Response:**

```json
{
  "message": "I am post body"
}
```

## Technologies Used

- **Node.js**
- **Express.js**
- **JSON Web Token (JWT)**
- **Cors**
- **Dotenv**

## Submission Guideline

1. Upload the code to **GitHub**.
2. Share the **GitHub public repository link**.

## Author

**Rahyan Shamsi Akil**

---

### 🚀 Happy Coding! 😊
