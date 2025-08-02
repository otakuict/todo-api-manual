import express from "express";
export const router = express.Router();
import * as authService from "../../services/auth.js";

router.post("/login", logIn);

export async function logIn(req, res, next) {
  try {
    if (!req.body) {
      res.status(400).json({ message: "body is required!" });
    }
    const { username, password } = req.body;
    const token = authService.generateAccessToken(username, password);
    if (!token) {
      res.status(401).json({ message: "invalid credentials" });
    }
    res.status(200).json({ token: token });
  } catch (e) {
    console.log("🚀 ~ logIn ~ error:", e);
    res.status(500).json({ message: "Internal server error" });
  }
}
