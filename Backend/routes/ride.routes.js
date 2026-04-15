import express from "express";
const rideRouters = express.Router();
import { body, query } from "express-validator";
import rideController from "../controllers/ride.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

rideRouters.post(
  "/create",
  authMiddleware.authUser,
  body("pickup")
    .isString()
    .isLength({ min: 3 })
    .withMessage("invalid pickup address"),
  body("destination")
    .isString()
    .isLength({ min: 3 })
    .withMessage("invalid destination address"),
  body("vehicleType")
    .isString()
    .isIn(["car", "moto", "auto", "carXL"])
    .withMessage("Invalid vehicle type"),
  rideController.createRide,
);

rideRouters.get(
  "/getFare",
  authMiddleware.authUser,
  query("pickup")
    .isString()
    .isLength({ min: 3 })
    .withMessage("invalid pickup address"),
  query("destination")
    .isString()
    .isLength({ min: 3 })
    .withMessage("invalid destination address"),
  rideController.getFare,
);

export default rideRouters;
