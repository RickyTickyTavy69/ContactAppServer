import {Router} from "express";
import favoritesController from "../controllers/favorites.controller.js";
const router = Router();

router.get("/getAll", favoritesController.getFavorites);

router.post("/addfavorite", favoritesController.addToFavorites);

router.post("/removeFavorite", favoritesController.removeFavorite);

export default router;