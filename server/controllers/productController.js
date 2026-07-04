import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../models/productModel.js";

// ===============================
// GET ALL PRODUCTS
// ===============================

export function getProducts(req, res) {
  getAllProducts((err, result) => {
    if (err) {
      return res.status(500).json(err);
    }

    res.json(result);
  });
}

// ===============================
// GET PRODUCT BY ID
// ===============================

export function getProduct(req, res) {
  const { id } = req.params;

  getProductById(id, (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }

    if (result.length === 0) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.json(result[0]);
  });
}

// ===============================
// ADD PRODUCT
// ===============================

export function addProduct(req, res) {
  createProduct(req.body, (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }

    res.status(201).json({
      message: "Product Added Successfully",
      productId: result.insertId,
    });
  });
}

// ===============================
// UPDATE PRODUCT
// ===============================

export function editProduct(req, res) {
  const { id } = req.params;

  updateProduct(id, req.body, (err) => {
    if (err) {
      return res.status(500).json(err);
    }

    res.json({
      message: "Product Updated Successfully",
    });
  });
}

// ===============================
// DELETE PRODUCT
// ===============================

export function removeProduct(req, res) {
  const { id } = req.params;

  deleteProduct(id, (err) => {
    if (err) {
      return res.status(500).json(err);
    }

    res.json({
      message: "Product Deleted Successfully",
    });
  });
}