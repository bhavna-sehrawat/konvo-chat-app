# Konvo - Real-Time Chat App

A feature-rich, full-stack web application designed for real-time, one-on-one messaging, demonstrating expertise in the MERN stack and WebSocket communication.

### [Live Demo](https://konvo-chat-app.onrender.com) 

---

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [How It Works](#how-it-works)

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

## Tech Stack

The application is built with a modern and powerful technology stack:

| Category | Technology |
| :--- | :--- |
| **Frontend** | ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) ![Zustand](https://img.shields.io/badge/Zustand-777BB4?style=for-the-badge) ![DaisyUI](https://img.shields.io/badge/daisyui-5A0EF8?style=for-the-badge) |
| **Backend** | ![Node.js](https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) |
| **Database** | ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white) ![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge) |
| **Real-Time** | ![Socket.io](https://img.shields.io/badge/Socket.io-black?style=for-the-badge&logo=socket.io) |
| **Auth** | ![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens) ![Bcrypt](https://img.shields.io/badge/Bcrypt-6242F5?style=for-the-badge) |
| **Dev Tools** | ![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white) ![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white) ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white) |

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