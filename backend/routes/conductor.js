import express from "express";
const router = express.Router();

import {createConductor, getConductor, getConductors, deleteConductor, updateConductor} from "../controllers/conductor.js";

router.get("/:id",getConductor);
router.post("/", createConductor);
router.delete("/:id", deleteConductor);
router.patch("/:id", updateConductor);
router.get("/", getConductors);


export default router;