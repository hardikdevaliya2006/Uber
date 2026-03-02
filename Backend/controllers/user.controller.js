import userModel from "../models/user.model.js";
import userServices from "../services/user.services.js";
import { validationResult } from "express-validator";

const registerUser = async (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({ error: error.array() });
  }

  const { fullName, email, password } = req.body;
  const hashPassword = await userModel.hashPassword(password);

  const user = await userServices.createUser({
    firstName: fullName.firstName,
    lastName: fullName.lastName,
    email,
    password: hashPassword,
  });

  const token = user.generateAuthToken();
  res.status(201).json({ token, user });
};

export default { registerUser };
