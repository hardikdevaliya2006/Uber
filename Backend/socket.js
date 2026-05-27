import { Server } from "socket.io";
import userModel from "./models/user.model.js";
import captainModel from "./models/captain.model.js";

let io;

function initializeSocket(server) {
  io = new Server(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", (socket) => {
    console.log(`Client connected: ${socket.id}`);

    socket.on("join", async (data) => { 
      const { userId, userType } = data;

      if (userType === "user") {
        await userModel.findByIdAndUpdate(userId, { socketId: socket.id });
      } else if (userType === "captain") {
        await captainModel.findByIdAndUpdate(userId, { socketId: socket.id });
      }
    });

    socket.on("disconnect", () => {
      console.log(`Client disconnect: ${socket.id}`);
    });
  });
}

function sendMessagetoSocketId(socketId, message) {
  if (io) {
    io.to(socketId).emit("message", message);
  } else {
    console.log("Socket.Io is not initialized.");
  }
}

export default { initializeSocket, sendMessagetoSocketId };
