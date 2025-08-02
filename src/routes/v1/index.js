import express from "express";
import { router as task } from "./task.js";

export const router = express.Router();

router.use("/task", task);
