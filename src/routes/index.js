import express from "express";
import { router as v1 } from "./v1/index.js";

export const router = express.Router();

router.use("/v1", v1);
