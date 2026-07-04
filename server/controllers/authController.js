import bcrypt from "bcrypt";
import {
  createUser,
  findUserByEmail,
} from "../models/userModel.js";

export async function register(req, res) {

  const {
    full_name,
    email,
    phone,
    password,
  } = req.body;

  findUserByEmail(email, async (err, result) => {

    if (result.length > 0) {
      return res.status(400).json({
        message: "Email already exists",
      });
    }

    const hashedPassword =
      await bcrypt.hash(password, 10);

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