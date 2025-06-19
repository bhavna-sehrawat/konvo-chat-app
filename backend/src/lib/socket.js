import { Server } from "socket.io";

let io;
const userSocketMap = {}; // { userId: socketId }

export const initSocketIO = (server) => {
  io = new Server(server, {
    cors: {
      origin: "process.env.CORS_ORIGIN", // This will use our Render environment variable
      credentials: true,
    },
  });

  io.on("connection", (socket) => {
    console.log("A user connected", socket.id);

    const userId = socket.handshake.query.userId;
    if (userId) userSocketMap[userId] = socket.id;

    io.emit("getOnlineUsers", Object.keys(userSocketMap));

    socket.on("disconnect", () => {
      console.log("A user disconnected", socket.id);
      if (userId) {
        delete userSocketMap[userId];
        io.emit("getOnlineUsers", Object.keys(userSocketMap));
      }
    });
  });
};

export const getReceiverSocketId = (userId) => {
  return userSocketMap[userId];
};

// This new function lets our controller get the io instance when needed
export const getIO = () => {
  if (!io) {
    throw new Error("Socket.IO not initialized!");
  }
  return io;
};