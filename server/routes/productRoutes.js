import express from "express";
import { verifyToken } from "../middleware/authMiddleware.js";
import { isAdmin } from "../middleware/adminMiddleware.js";

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

router.post(
  "/",
  verifyToken,
  isAdmin,
  addProduct
);

// ===============================
// UPDATE PRODUCT
// ===============================

router.put(
  "/:id",
  verifyToken,
  isAdmin,
  editProduct
);

// ===============================
// DELETE PRODUCT
// ===============================

router.delete(
  "/:id",
  verifyToken,
  isAdmin,
  removeProduct
);

export default router;