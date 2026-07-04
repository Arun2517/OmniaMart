import express from "express";

import { verifyToken } from "../middleware/authMiddleware.js";

import { profile } from "../controllers/userController.js";

const router = express.Router();

router.get(
  "/profile",
  verifyToken,
  profile
);

export default router;