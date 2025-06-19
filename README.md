# Konvo - Real-Time Chat App

A feature-rich, full-stack web application designed for real-time, one-on-one messaging, demonstrating expertise in the MERN stack and WebSocket communication.

### [Live Demo](https://konvo-chat-app.onrender.com) 

---

## Introduction

**Konvo** is a modern, real-time chat application built with the MERN stack (MongoDB, Express.js, React.js, Node.js). It provides a seamless and interactive user experience for one-on-one conversations, featuring live online status updates and a secure authentication system. This project showcases a robust backend API, a dynamic frontend, and real-time communication capabilities using Socket.io.

---

## Features

- **⚡ Real-Time Messaging:** Instant message delivery and reception using **Socket.io**.
- **🔒 Secure Authentication:** JWT-based authentication ensures that user data and conversations are private and secure.
- **🟢 Online Status:** See which users are currently online in real-time.
- **📱 Responsive UI:** A clean and modern user interface built with **React** and **TailwindCSS**, fully responsive for both desktop and mobile devices.
- **⚙️ Efficient State Management:** Uses **Zustand** for lightweight and efficient global state management on the client-side.
- **🛡️ Protected Routes:** Backend routes are protected to prevent unauthorized access to user data and messages.
- **🛠️ Full-Stack Error Handling:** Comprehensive error handling on both the client and server for a stable and reliable user experience.
- **🧪 API Validation:** All API endpoints were thoroughly tested for functionality, security rules, and error responses using **Postman**.

---

## How It Works

Konvo's architecture is composed of two main parts: a **React frontend** and a **Node.js/Express backend**.

1.  **RESTful API**: The backend serves a secure RESTful API for user authentication (signup, login, logout) and data operations (fetching users, past messages).
2.  **JWT Authentication**: Upon login, the server generates a JSON Web Token (JWT), which is stored on the client. This token is sent with subsequent requests to access protected API routes.
3.  **WebSocket Communication**: For real-time functionality, the application uses **Socket.io**.
    -   When a user logs in, the client establishes a persistent WebSocket connection to the server.
    -   The server maintains a list of connected users and broadcasts online status updates to all clients.
    -   When a message is sent, the client emits a `sendMessage` event. The server receives this message, saves it to the database, and then relays it to the appropriate recipient via their socket connection.

---