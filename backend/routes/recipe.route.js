import express from 'express';
import { addNewRecipe, deleteRecipe, getAllRecipes, getRecipe, updateRecipe } from '../models/recipe.function.js';

const router = express.Router();

router.get("/", getAllRecipes);
router.post("/", addNewRecipe);
router.delete("/:id", deleteRecipe);
router.put("/:id", updateRecipe);
router.get("/:id", getRecipe);


export default router;