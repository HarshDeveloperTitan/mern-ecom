import express from "express";
import {
  createProduct,
  getProducts,
  deleteProduct,
  updateProduct,
} from "../controller/productController.js";

const router = express.Router();

// Create a product
router.post("/create", createProduct);

// Get all products
router.get("/", getProducts);

// Delete a product by ID
router.delete("/delete/:id", deleteProduct);

//Update a product
router.patch("/update/:id", updateProduct);

export default router;
