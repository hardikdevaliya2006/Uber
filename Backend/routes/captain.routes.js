import express from "express";
import captainController from "../controllers/captain.controller.js";
import middleware from "../middlewares/auth.middleware.js"
import { body } from "express-validator";
const captainRoutes = express.Router();

captainRoutes.post("/register", [
  body("email").isEmail().withMessage("Invalid Email"),
  body("fullName.firstName")
    .isLength({ min: 3 })
    .withMessage("First name must be at least 3 characters long"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
  body("vehicle.color")
    .isLength({ min: 3 })
    .withMessage("Color must be at least 3 characters long"),
  body("vehicle.plate")
    .isLength({ min: 3 })
    .withMessage("Plate must be at least 3 characters long"),
  body("vehicle.capacity")
    .isInt({ min: 1 })
    .withMessage("Capacity must be at least 1"),
  body("vehicle.vehicleType")
    .isIn(["car", "motorcycle", "auto"])
    .withMessage("Invalid vehicle type"),
  captainController.registerCaptain,
]);

captainRoutes.post("/login", [
  body("email").isEmail().withMessage("Invalid Email"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
  captainController.loginCaptain,
]);

captainRoutes.get("/profile", middleware.authCaptain, captainController.getCaptainProfile);

captainRoutes.get("/logout", middleware.authCaptain, captainController.logoutCaptain);

export default captainRoutes;
