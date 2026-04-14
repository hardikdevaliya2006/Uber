import { validationResult } from "express-validator";
import rideServices from "../services/ride.services.js";

const createRide = async (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({ error: error.array() });
  }

  const { pickup, destination, vehicleType } = req.body;
  try {
    const ride = await rideServices.createRide({
      user: req.user._id,
      pickup,
      destination,  
      vehicleType,
    });
    return res.status(201).json(ride);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default { createRide };
