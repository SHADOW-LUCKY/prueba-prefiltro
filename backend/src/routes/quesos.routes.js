import {Router} from "express";
import * as q from "../controllers/quesos.controllers.js";

const router = Router();

router.get("/getall", q.getQuesos);
router.post("/create", q.createQueso);
router.patch("/update/:id", q.updateQueso);
router.delete("/delete/:id", q.deleteQueso);

export default router;