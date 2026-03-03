import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import express from "express";
const app = express();
import connectToDb from "./db/db.js";
connectToDb();
import userRoutes from "./routes/user.routes.js";
import captainRoutes from "./routes/captain.routes.js";
import cookieParser from "cookie-parser";

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/users", userRoutes);
app.use("/captains", captainRoutes);

app.get("/", (req, res) => {
  res.send("We are get it");
});

export default app;
