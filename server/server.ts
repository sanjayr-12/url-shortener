import express from "express";
import dotenv from "dotenv";
import urlRoutes from "./routes/url.routes";
import connect from "./db/db";
import path from "path";
import { redirectURL } from "./controller/url.controller";
const app = express();

dotenv.config();

app.use(express.json());
app.use(express.static(path.join(__dirname, "../../client/dist")));

app.use("/api/url", urlRoutes);
app.get("/:alias", redirectURL);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../../client/dist", "index.html"));
});

app.listen(process.env.PORT, () => {
  connect();
  console.log("server started");
});
