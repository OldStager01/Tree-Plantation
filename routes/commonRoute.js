import express from "express";
import { getPlacesController } from "../controller/common/getPlacesController.js";
import { getNearbyPlacesController } from "../controller/common/getNearbyPlacesController.js";
const router = express.Router();

router.get("/getPlaces", getPlacesController);
router.get("/getNearbyPlaces", getNearbyPlacesController);

export default router;
