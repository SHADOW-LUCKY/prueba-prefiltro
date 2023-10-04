import {Router } from "express";
import * as s from "../controllers/salsas.controllers.js";

const router = Router();

router.get("/getall", s.getSalsas);
router.post("/create", s.createSalsa);
router.patch("/update/:id", s.updateSalsa);
router.delete("/delete/:id", s.deleteSalsa);

export default router;