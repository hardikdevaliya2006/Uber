import { validationResult } from "express-validator";
import mapsServices from "../services/maps.services.js";

const getCoordinates = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { address } = req.query;
  try {
    const coordinates = await mapsServices.getAddressCoordinate(address);
    return res.status(200).json(coordinates);
  } catch (error) {
    res.status(404).json({ message: "Coordinate not Found" });
  }
};

const getDistanceTime = async (req, res, next) => {
  try {
    const { origin, destination } = req.query;
    const distanceTime = await mapsServices.getDistanceTime(
      origin,
      destination,
    );
    res.status(200).json(distanceTime);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getAutoCompleteSuggetions = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { input } = req.query;
  try {
    const suggetions = await mapsServices.getAutoCompleteSuggetions(input);
    return res.status(200).json(suggetions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export default { getCoordinates, getDistanceTime, getAutoCompleteSuggetions };
