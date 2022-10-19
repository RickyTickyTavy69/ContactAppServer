import {Router} from "express";
import CalllistController from "../controllers/calllist.controller.js";
const router = Router();

router.post("/addToList", CalllistController.addContact);

router.get("/getAll", CalllistController.getAll);


export default router;