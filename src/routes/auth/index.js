import express from "express";
import { router as auth } from "./auth.js";

export const router = express.Router();

router.use("/authorization", auth);
