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
    ingredients: [
        {
            type: String,
            required: true
        }
    ],
    instructions: {
        type: String,
        default: ""
    },
    catagory: {
        type: String,
        enum: ['Breakfast', 'Lunch', 'Dinner', 'Snack', 'Dessert', 'Meal', 'Dish'],
        required: true
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
}, {
    timestamps: true // createdAt and updatedAt
});

const Recipe = mongoose.model('Recipe', recipeSchema);

export default Recipe;