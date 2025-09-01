import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DeleteButton from "../components/buttons/DeleteButton";
import axios from "axios";

export default function AddRecipe() {
    const [formData, setFormData] = useState({
        name: "",
        image: "",
        difficulty: "Easy",
        rating: 5,
        ingredients: [],
        instructions: "",
        catagory: "Breakfast",
        // createdBy: "" // This will be set from the logged in user context
    });
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/recipes', formData);
            navigate('/');
        } catch (err) {
            console.error("Error adding recipe: ", err);
            alert("Failed to add recipe. Please try again.");
        }
    }

    const handleInputChange = (field, value) => {
        setFormData({
            ...formData,
            [field]: value
        })
    }

    const handleIngredientChange = (index, value) => {
        const newIngredients = [...formData.ingredients];
        newIngredients[index] = value;
        handleInputChange("ingredients", newIngredients);
    }

    const deleteIngredient = (index) => {
        const newIngredients = formData.ingredients.filter((_, i) => i !== index);
        handleInputChange("ingredients", newIngredients);
    }

    const addIngredient = () => {
        if (formData.ingredients.length == 0 || formData.ingredients[formData.ingredients.length - 1] !== "") {
            handleInputChange("ingredients", [...formData.ingredients, ""]);
        }
    }

    return (
        <div className="container mt-4">
            <div className='row'>
                <div className='col'></div>
                <div className='col-md-8'>
                    <form onSubmit={handleSubmit}>
                        <h1 className='py-3 text-center'>Add Recipe</h1>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Recipe name</label>
                            <input className="form-control"
                                type="text"
                                value={formData.name}
                                onChange={(e) => handleInputChange("name", e.target.value)}
                                id="name"
                                required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="image" className="form-label">Image URL</label>
                            <input className="form-control"
                                type="text"
                                value={formData.image}
                                onChange={(e) => handleInputChange("image", e.target.value)}
                                id="image"
                                required
                                placeholder="paste image url here" />
                        </div>

                        <div className="d-flex flex-row gap-3">
                            <div className="mb-3">
                                <label htmlFor="rating" className="form-label">Rating<span className="d-none d-sm-inline"> ⭐️</span></label>
                                <input className="form-control"
                                    type="number"
                                    value={formData.rating}
                                    onChange={(e) => handleInputChange("rating", e.target.value)}
                                    id="image"
                                    required
                                    min={1}
                                    max={5} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="difficulty" className="form-label">Catagory</label>
                                <select className="form-select" onChange={(e) => handleInputChange('catagory', e.target.value)} required>
                                    <option value="" disabled>Select</option>
                                    <option value="Breakfast">Breakfast</option>
                                    <option value="Lunch">Lunch</option>
                                    <option value="Dinner">Dinner</option>
                                    <option value="Dessert">Dessert</option>
                                    <option value="Snack">Snack</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="difficulty" className="form-label">Difficulty</label>
                                <select className="form-select" onChange={(e) => handleInputChange('difficulty', e.target.value)}>
                                    <option value="" disabled>Select</option>
                                    <option value="Easy">Easy</option>
                                    <option value="Medium">Medium</option>
                                    <option value="Hard">Hard</option>
                                </select>
                            </div>
                        </div>
                        <div className="mb-3 d-flex flex-column align-items-start">
                            <label htmlFor="ingredients" className="form-label">Ingredients</label>
                            {formData.ingredients.map((ingredient, index) => (
                                <div key={index} className="mb-2 d-flex align-items-center">
                                    <input className="form-control" value={ingredient} onChange={(e) => {
                                        handleIngredientChange(index, e.target.value)
                                    }}
                                        placeholder={`Ingredient ${index + 1}`}
                                        required>
                                    </input>
                                    <DeleteButton onClick={() => deleteIngredient(index)} />
                                </div>)
                            )}
                            <button type="button" className="btn underline-button text-success p-0" onClick={addIngredient}>Add</button>
                        </div>
                        <div class="mb-3">
                            <label for="instructions" class="form-label">Instructions</label>
                            <textarea className="form-control" id="instructions" rows="4" 
                                value={formData.instructions}
                                onChange={ e => handleInputChange("instructions", e.target.value)}></textarea>
                        </div>

                        <div className='d-flex justify-content-between mt-4'>
                            <button className='btn auth-btn' onClick={() => navigate('/')} style={{ color: 'var(--primary-color)' }}>Cancel</button>
                            <button type="submit" className="btn btn-primary align-self-center scale-button py-2 px-3" style={{ backgroundColor: 'var(--primary-color)', borderColor: 'var(--primary-color)' }}>Create</button>
                        </div>

                    </form>
                </div>
                <div className='col'></div>
            </div>

        </div>
    )
}