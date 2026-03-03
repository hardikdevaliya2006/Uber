import mongoose from "mongoose";

const blackListTokenSchema = new mongoose.Schema({
  token: {
    type: String,
    required: true,
    unique: true,
  },
  cretaetedAt: {
    type: Date,
    default: Date.now,
    expires: 86400,
  },
});

const blackListTokenModel = mongoose.model(
  "BlackListTokne",
  blackListTokenSchema,
);
export default blackListTokenModel;
