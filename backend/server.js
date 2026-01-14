import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import router from "./routes/authRoutes.js";
import productRoutes from "./routes/productRoutes.js";

const app = express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/auth", router);
app.use("/api/products", productRoutes);

connectDB();

app.listen(process.env.PORT, () => {
  console.log(`http://localhost:3000`);
});
