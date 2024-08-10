import express from "express";
import { getUserController } from "../controller/user/getUserController.js";

const router = express.Router();

router.get("/getUser", getUserController);

export default router;
