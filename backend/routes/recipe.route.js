import express from 'express';
import { addNewRecipe, deleteRecipe, getRecipes, getARecipe, updateRecipe } from './recipe.function.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

router.get("/", protect, getRecipes);
router.post("/", protect, addNewRecipe);
router.delete("/:id", protect, deleteRecipe);
router.put("/:id", protect, updateRecipe);
router.get("/:id", getARecipe);


export default router;