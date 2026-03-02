import mongoose from "mongoose";

async function connectToDb() {
  try {
    await mongoose.connect(process.env.DB_CONNECT);
    console.log("Connected to DB");
  } catch (error) {
    console.error("DB Connection Failed:", error.message);
    process.exit(1);
  }
}

export default connectToDb;