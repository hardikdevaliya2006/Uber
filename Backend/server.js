import http from "http";
import app from "./app.js";
import sockets from "./socket.js";
const port = process.env.PORT || 3000;

const server = http.createServer(app);

sockets.initializeSocket(server);

server.listen(port, () => {
  console.log(`Srever runs on port http://localhost:${port}`);
});
