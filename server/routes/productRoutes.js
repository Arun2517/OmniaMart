import express from "express";

import {
  getProducts,
  getProduct,
  addProduct,
  editProduct,
  removeProduct,
} from "../controllers/productController.js";

const router = express.Router();

// ===============================
// GET ALL PRODUCTS
// ===============================

router.get("/", getProducts);

// ===============================
// GET PRODUCT BY ID
// ===============================

router.get("/:id", getProduct);

// ===============================
// ADD PRODUCT
// ===============================

router.post("/", addProduct);

// ===============================
// UPDATE PRODUCT
// ===============================

router.put("/:id", editProduct);

// ===============================
// DELETE PRODUCT
// ===============================

router.delete("/:id", removeProduct);

export default router;