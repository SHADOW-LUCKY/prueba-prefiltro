import {Router} from "express";
import * as ac from "../controllers/acomp.controllers.js";

const router = Router();

router.get("/getall", ac.getAcomp);
router.post("/create", ac.createAcomp);
router.patch("/update/:id", ac.updateAcomp);
router.delete("/delete/:id", ac.deleteAcomp);

export default router;