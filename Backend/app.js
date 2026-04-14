import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import express from "express";
const app = express();
import connectToDb from "./db/db.js";
connectToDb();
import userRoutes from "./routes/user.routes.js";
import captainRoutes from "./routes/captain.routes.js";
import mapRoutes from "./routes/map.routes.js";
import cookieParser from "cookie-parser";
import rideRouters from "./routes/ride.routes.js";

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/users", userRoutes);
app.use("/captains", captainRoutes);
app.use("/maps", mapRoutes)
app.use("/rides", rideRouters)

app.get("/", (req, res) => {
  res.send("We are get it");
});

export default app;
