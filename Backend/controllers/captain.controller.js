import blackListTokenModel from "../models/blackListToken.model.js";
import captainModel from "../models/captain.model.js";
import captainServices from "../services/captain.services.js";
import { validationResult } from "express-validator";

const registerCaptain = async (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({ error: error.array() });
  }

  const { fullName, email, password, vehicle } = req.body;

  const isCaptainAlreadyExist = await captainModel.findOne({ email });
  if (isCaptainAlreadyExist) {
    return res.status(400).json({ message: "Captain Alreday Exist" });
  }

  const hashPassword = await captainModel.hashPassword(password);
  const captain = await captainServices.createCaptain({
    firstName: fullName.firstName,
    lastName: fullName.lastName,
    email,
    password: hashPassword,
    color: vehicle.color,
    plate: vehicle.plate,
    capacity: vehicle.capacity,
    vehicleType: vehicle.vehicleType,
  });

  const token = captain.generateAuthToken();
  res.status(201).json({ captain, token });
};

const loginCaptain = async (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({ error: error.array() });
  }

  const { email, password } = req.body;
  const captain = await captainModel.findOne({ email }).select("+password");
  if (!captain) {
    return res.status(401).json({ message: "Invalid Email or Password" });
  }

  const isMatch = await captain.comparePassword(password);
  if (!isMatch) {
    return res.status(401).json({ message: "Invalid Email or Password" });
  }

  const token = captain.generateAuthToken();
  res.cookie("token", token);
  res.status(200).json({ captain, token });
};

const getCaptainProfile = async (req, res, next) => {
  res.status(200).json({ captain: req.captain });
};

const logoutCaptain = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ message: "No token provided" });
  }

  const token = authHeader.split(" ")[1];
  await blackListTokenModel.create({ token });
  res.clearCookie("token");
  res.status(200).json({ message: "Logout Captain" });
};

export default {
  registerCaptain,
  loginCaptain,
  getCaptainProfile,
  logoutCaptain,
};
