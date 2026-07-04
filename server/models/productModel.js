import db from "../config/db.js";

// ===============================
// GET ALL PRODUCTS
// ===============================

export function getAllProducts(callback) {

  const sql = `
    SELECT *
    FROM products
    ORDER BY created_at DESC
  `;

  db.query(sql, callback);

}

// ===============================
// GET PRODUCT BY ID
// ===============================

export function getProductById(id, callback) {

  db.query(
    "SELECT * FROM products WHERE id=?",
    [id],
    callback
  );

}

// ===============================
// ADD PRODUCT
// ===============================

export function createProduct(product, callback) {

  const sql = `
    INSERT INTO products
    (name,description,price,category,image,stock,status)
    VALUES(?,?,?,?,?,?,?)
  `;

  db.query(
    sql,
    [
      product.name,
      product.description,
      product.price,
      product.category,
      product.image,
      product.stock,
      product.status,
    ],
    callback
  );

}

// ===============================
// UPDATE PRODUCT
// ===============================

export function updateProduct(id, product, callback) {

  const sql = `
    UPDATE products
    SET
      name=?,
      description=?,
      price=?,
      category=?,
      image=?,
      stock=?,
      status=?
    WHERE id=?
  `;

  db.query(
    sql,
    [
      product.name,
      product.description,
      product.price,
      product.category,
      product.image,
      product.stock,
      product.status,
      id,
    ],
    callback
  );

}

// ===============================
// DELETE PRODUCT
// ===============================

export function deleteProduct(id, callback) {

  db.query(
    "DELETE FROM products WHERE id=?",
    [id],
    callback
  );

}