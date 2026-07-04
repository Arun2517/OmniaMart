import db from "../config/db.js";

export function createUser(user, callback) {
  const sql = `
    INSERT INTO users
    (full_name, email, phone, password)
    VALUES (?, ?, ?, ?)
  `;

  db.query(
    sql,
    [
      user.full_name,
      user.email,
      user.phone,
      user.password,
    ],
    callback
  );
}

export function findUserByEmail(email, callback) {
  db.query(
    "SELECT * FROM users WHERE email = ?",
    [email],
    callback
  );
}