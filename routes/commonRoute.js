import express from "express";
import { getPlacesController } from "../controller/common/getPlacesController.js";
const router = express.Router();

router.get("/getPlaces", getPlacesController);

export default router;
