import express from "express";
import userConroller from "../controllers/user.controller.js";
import middleware from "../middlewares/auth.middleware.js";
import { body } from "express-validator";
const userRoutes = express.Router();

userRoutes.post(
  "/register",
  [
    body("email").isEmail().withMessage("Invalid Email"),
    body("fullName.firstName")
      .isLength({ min: 3 })
      .withMessage("First name must be at least 3 characters long"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
  ],
  userConroller.registerUser,
);

userRoutes.post(
  "/login", 
  [
    body("email").isEmail().withMessage("Invalid Email"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
  ],
  userConroller.loginUser,
);

userRoutes.get("/profile", middleware.authUser, userConroller.getUserProfile);

userRoutes.get("/logout", middleware.authUser, userConroller.logoutUser)

export default userRoutes;
