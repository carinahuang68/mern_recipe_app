import mongoose from "mongoose";
import Recipe from '../models/recipe.model.js';

export const getAllRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.find();
        res.status(200).json({success: true, data: recipes});
    } catch (error) {
        console.error("Error in get recipes: ", error.message);
        res.status(500).json({success: false, message: "Server error"});
    }
}

export const addNewRecipe = async (req, res) => {
    const recipe = req.body; // user will send this data

    if (!recipe.name || !recipe.difficulty || !recipe.image || !recipe.rating) {
        return res.status(400).json({success: false, message: "Please provide all fields"});
    }

    const newRecipe = new Recipe(recipe);

    try {
        await newRecipe.save();
        res.status(201).json({success: true, data: newRecipe});
    } catch (error) {
        console.error("Error in create recipe: ", error.message);
        res.status(500).json({success: false, message: "Server error"});
    }
}

export const deleteRecipe = async (req, res) => {
    const {id} = req.params;
    console.log("ID to be deleted: ", id);

    if (mongoose.Types.ObjectId.isValid(id) === false) {
        res.status(404).json({success: false, message: "Recipe not found"});
        return;
    }

    try {
        await Recipe.findByIdAndDelete(id).then(doc => console.log("Deleted recipe: ", doc));
        res.status(200).json({success: true, message: "Recipe deleted successfully"});
        await Recipe.find().then(recipes => console.log("Remaining recipes: ", recipes));
    } catch (error) {
        console.error("Error in delete recipe: ", error.message);
        res.status(500).json({success: false, message: "Server error"});
    }
}

export const updateRecipe = async (req, res) => {
    const {id} = req.params;
    const recipe = req.body;

    if (mongoose.Types.ObjectId.isValid(id) === false) {
        res.status(404).json({success: false, message: "Recipe not found"});
        return;
    }

    try {
        await Recipe.findByIdAndUpdate(id, recipe, {new: true}).then(doc => console.log("Updated recipe: ", doc));  
        res.status(200).json({success: true, message: "Recipe updated successfully"});
    } catch (error) {
        res.status(500).json({success: false, message: "Server error"});
    }
}

export const getRecipe = async (req, res) => {
    const {id} = req.params;
    if (mongoose.Types.ObjectId.isValid(id) === false) {
        res.status(404).json({success: false, message: "Recipe not found"});
        return;
    }

    try {
        const recipe = await Recipe.findById(id);
        res.status(200).json({success: true, data: recipe});
    } catch (error) {
        console.error("Error in get recipe: ", error.message);
        res.status(500).json({success: false, message: "Server error"});
    }
}