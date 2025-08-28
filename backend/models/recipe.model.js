import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    difficulty: {
        type: String,
        enum: ['Easy', 'Medium', 'Hard'],
        required: true
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
        required: true
    },
    ingredients: {
        type: [String],
        required: false
    },
    instructions: {
        type: [String],
        required: false
    },
    catagory: {
        type: String,
        enum: ['Breakfast', 'Lunch', 'Dinner', 'Snack', 'Dessert'],
        required: false
    }
}, {
    timestamps: true // createdAt and updatedAt
});

const Recipe = mongoose.model('Recipe', recipeSchema);

export default Recipe;