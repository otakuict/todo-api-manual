import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
import { router as v1App } from "./routes/index.js";

app.use(bodyParser.json({ limit: "50mb" }));
app.use("/api", v1App);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
