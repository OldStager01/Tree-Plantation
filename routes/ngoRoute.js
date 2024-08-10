import express from "express";
import { registerNewPlaceContoller } from "../controller/ngo/registerPlaceController.js";
import { addPlaceToNGOController } from "../controller/ngo/addPlaceToNGOController.js";
const router = express.Router();

router.post("/registerPlace", registerNewPlaceContoller);
router.post("/addPlace", addPlaceToNGOController);

export default router;
