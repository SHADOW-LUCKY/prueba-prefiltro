import {Router} from "express";
import * as t from "../controllers/toppings.controllers.js";

const router = Router();

router.get("/getall", t.getToppings);
router.post("/create", t.createTopping);
router.patch("/update/:id", t.updateTopping);
router.delete("/delete/:id", t.deleteTopping);


export default router;