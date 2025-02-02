import express from "express";
import { allTherapies, getTherapy } from "../controllers/therapyController.js";
const router = express.Router();

router.get("/", allTherapies);

router.get("/:id", getTherapy);

export default router;
