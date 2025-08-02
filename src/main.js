import dotenv from "dotenv";

import express from "express";
import bodyParser from "body-parser";
import authenticateToken from "./middleware/auth.js";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, "../.env") });

const app = express();

const port = 3000;
import { router as v1App } from "./routes/index.js";
import { router as auth } from "./routes/auth/index.js";

app.use(bodyParser.json({ limit: "50mb" }));

app.use("/", auth);
app.use("/api", authenticateToken, v1App);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
