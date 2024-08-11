import express from "express";
import { getUserController } from "../controller/user/getUserController.js";
import {
  initialiazePlantationController,
  completePlantationController,
  getPlantationsController,
  plantTreeController,
  getPhotoURLController,
} from "../controller/user/userPlantation.js";

import { upload } from "../config/multer.js";
const router = express.Router();

router.get("/getUser", getUserController);

//Plantation Routes

router.get("/getPlantations", getPlantationsController);
router.post("/initializePlantation", initialiazePlantationController);
router.post("/plantTree", upload.single("photo"), plantTreeController);
router.post("/completePlantation", completePlantationController);
router.get("/photoURL", getPhotoURLController);

export default router;
