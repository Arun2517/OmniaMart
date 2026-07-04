import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import {
  createUser,
  findUserByEmail,
} from "../models/userModel.js";

// ================= REGISTER =================

export async function register(req, res) {
  const {
    full_name,
    email,
    phone,
    password,
  } = req.body;

  findUserByEmail(email, async (err, result) => {

    if (err) {
      return res.status(500).json(err);
    }

    if (result.length > 0) {
      return res.status(400).json({
        message: "Email already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    createUser(
      {
        full_name,
        email,
        phone,
        password: hashedPassword,
      },
      (err) => {

        if (err) {
          return res.status(500).json(err);
        }

        res.status(201).json({
          message: "User Registered Successfully",
        });

      }
    );

  });
}

// ================= LOGIN =================

export async function login(req, res) {

  const { email, password } = req.body;

  findUserByEmail(email, async (err, result) => {

    if (err) {
      return res.status(500).json(err);
    }

    if (result.length === 0) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const user = result[0];

    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid Password",
      });
    }

    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
        role: user.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );

    res.json({
      message: "Login Successful",
      token,
    });

  });

}