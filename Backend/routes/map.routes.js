import express from "express";
import authMiddleware from "../middlewares/auth.middleware.js";
import mapController from "../controllers/map.controller.js";
import { query } from "express-validator";
const mapRoutes = express.Router();

mapRoutes.get(
  "/get-coordinates",
  query("address").isString().isLength({ min: 3 }),
  authMiddleware.authUser,
  mapController.getCoordinates,
);

mapRoutes.get(
  "/get-distance-time",
  query("origin").isString().isLength({ min: 3 }),
  query("destination").isString().isLength({ min: 3 }),
  authMiddleware.authUser,
  mapController.getDistanceTime,
);

mapRoutes.get(
  "/get-suggetions",
  query("input").isString().isLength({ min: 3 }),
  authMiddleware.authUser,
  mapController.getAutoCompleteSuggetions,
);

export default mapRoutes;
