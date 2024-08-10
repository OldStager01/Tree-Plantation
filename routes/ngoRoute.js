import express from "express";
import { registerNewPlaceContoller } from "../controller/ngo/registerPlaceController.js";
import { addPlaceToNGOController } from "../controller/ngo/addPlaceToNGOController.js";
import { getPlacesUderNGOController } from "../controller/ngo/getPlacesUnderNGOController.js";
const router = express.Router();

router.post("/registerPlace", registerNewPlaceContoller);
router.post("/addPlace", addPlaceToNGOController);
router.get("/getPlaces", getPlacesUderNGOController);

export default router;
