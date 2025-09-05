import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DeleteButton from "../components/buttons/DeleteButton";

export default function RecipeForm({onSubmit, initialFormData, submitLabel}) {
    const [formData, setFormData] = useState(initialFormData);
    const navigate = useNavigate();

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        onSubmit(formData);
    }

    const handleCancel = () => {
        if (window.confirm("Changes you made may not be saved.\nAre you sure you want to go back?")) {
            navigate(-1);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
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
                    <label htmlFor="time" className="form-label">Time required (min)</label>
                    <input className="form-control"
                        type="number"
                        value={formData.time}
                        onChange={(e) => handleInputChange("time", e.target.value)}
                        id="time"
                        required 
                        min="0"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="difficulty" className="form-label">Catagory</label>
                    <select className="form-select" value={formData.catagory} onChange={(e) => handleInputChange('catagory', e.target.value)} required>
                        <option value="" disabled>Select</option>
                        <option value="Breakfast">Breakfast</option>
                        <option value="Meal">Meal</option>
                        <option value="Dish">Dish</option>
                        <option value="Dessert">Dessert</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="difficulty" className="form-label">Difficulty</label>
                    <select className="form-select" value={formData.difficulty} onChange={(e) => handleInputChange('difficulty', e.target.value)}>
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
            <div className="mb-3">
                <label htmlFor="instructions" className="form-label">Instructions</label>
                <textarea className="form-control" id="instructions" rows="4"
                    value={formData.instructions}
                    onChange={e => handleInputChange("instructions", e.target.value)}></textarea>
            </div>

            <div className='d-flex justify-content-between my-4'>
                <button className='btn auth-btn' type="button" onClick={handleCancel} style={{ color: 'var(--primary-color)' }}>Cancel</button>
                <button type="submit" className="btn btn-primary align-self-center scale-button py-2 px-3" style={{ backgroundColor: 'var(--primary-color)', borderColor: 'var(--primary-color)' }}>{submitLabel}</button>
            </div>
        </form>
    )
}