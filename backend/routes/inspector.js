import express from "express";
const router = express.Router();

import {createInspector, getInspector, getInspectors, deleteInspector, updateInspector} from "../controllers/inspecter.js";

router.get("/:id",getInspector);
router.post("/", createInspector);
router.delete("/:id", deleteInspector);
router.patch("/:id", updateInspector);
router.get("/", getInspectors);


export default router;