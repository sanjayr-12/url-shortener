import express from "express"
const router = express.Router()
import { aliasName } from "../controller/url.controller";

router.post("/", aliasName);

export default router
