import mongoose from "mongoose";
import Recipe from '../models/Recipe.js';


export const getRecipes = async (req, res) => {
    const {category} = req.query;
    try {
        const query = category ? {catagory: category} : {};
        const recipes = await Recipe.find(query);
        res.status(200).json(recipes);
    } catch (error) {
        console.error("Error in get recipes by category: ", error.message);
        res.status(500).json({success: false, message: "Server error"});
    }
}

export const addNewRecipe = async (req, res) => {
    const recipe = req.body; // user will send this data

    if (!recipe.name || !recipe.catagory || !recipe.image || !recipe.rating) {
        return res.status(400).json({success: false, message: "Please provide all fields"});
    }

    const newRecipe = new Recipe({...recipe, createdBy: req.user._id});

    try {
        await newRecipe.save();
        res.status(201).json(newRecipe);
    } catch (error) {
        console.error("Error in create recipe: ", error.message);
        res.status(500).json({success: false, message: "Server error"});
    }
}

export const deleteRecipe = async (req, res) => {
    const {id} = req.params;
    console.log("ID to be deleted: ", id);
    const recipe = await Recipe.findById(id);

    if (!recipe) {
        res.status(404).json({success: false, message: "Recipe not found"});
        return;
    }

    if (recipe.createdBy.toString() !== req.user._id.toString()) {
        return res.status(401).json({success: false, message: "Not authorized to delete this recipe"});
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
    const recipe = Recipe.findById(id);

    if (!recipe) {
        return res.status(404).json({success: false, message: "Recipe not found"});
    }

    if (recipe.createdBy.toString() !== req.user._id.toString()) {
        return res.status(401).json({success: false, message: "Not authorized to update this recipe"});
    }

    try {
        await Recipe.findByIdAndUpdate(id, req.body, {new: true}).then(doc => console.log("Updated recipe: ", doc));  
        res.status(200).json({success: true, message: "Recipe updated successfully"});
    } catch (error) {
        res.status(500).json({success: false, message: "Server error"});
    }
}

export const getARecipe = async (req, res) => {
    const {id} = req.params;
    if (mongoose.Types.ObjectId.isValid(id) === false) {
        res.status(404).json({success: false, message: "Recipe not found"});
        return;
    }

    try {
        const recipe = await Recipe.findById(id);
        res.status(200).json(recipe);
    } catch (error) {
        console.error("Error in get recipe: ", error.message);
        res.status(500).json({success: false, message: "Server error"});
    }
}