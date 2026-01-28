import mongoose from "mongoose";
import { MONGODB_URL } from "../config/index.js";
const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URL);
    console.log("Database Connected!");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
