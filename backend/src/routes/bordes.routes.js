import {Router} from "express";
import * as b from "../controllers/bordes.controllers.js";

const router = Router();

router.get("/getall", b.getBordes);
router.post("/create", b.createBorde);
router.patch("/update/:id", b.updateBorde);
router.delete("/delete/:id", b.deleteBorde);

export default router