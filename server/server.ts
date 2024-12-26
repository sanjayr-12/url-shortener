import express from "express";
import dotenv from "dotenv";
import urlRoutes from "./routes/url.routes"
import connect  from "./db/db";
const app = express();

dotenv.config();

app.use(express.json());

app.use("/api/url/",urlRoutes)

app.listen(process.env.PORT, () => {
    connect()
  console.log("server started");
});
