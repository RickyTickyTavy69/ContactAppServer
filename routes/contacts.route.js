import {Router} from "express";
import {ContactsController} from "../controllers/contacts.controller.js";
const router = Router();

router.get("/getAll", ContactsController.getAll);

router.post("/addContact", ContactsController.add);

export default router;