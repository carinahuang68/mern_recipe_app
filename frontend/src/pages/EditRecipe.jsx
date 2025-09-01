import RecipeForm from "../components/RecipeForm";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function EditRecipe() {

    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchRecipe = async () => {
            const res = await axios.get('/api/recipes/' + id);
            setRecipe(res.data);
        }
        console.log("Fetching recipe with id: ", id);
        fetchRecipe();
    }, [id]);

    const onSubmit = async (data) => {
        try {
            await axios.put(`/api/recipes/${id}`, data);
            navigate(-1);
        } catch (err) {
            console.error("Error adding recipe: ", err);
            alert("Failed to add recipe. Please try again.");
        }
    }

    if (!recipe) return <div>Loading...</div>;

    return (
        <div className="container my-4">
            <div className='row'>
                <div className='col'></div>
                <div className='col-md-8'>
                    <h1 className='py-3 text-center'>Edit Recipe</h1>
                    <RecipeForm initialFormData={recipe} onSubmit={onSubmit} submitLabel={"Update"} />
                </div>
                <div className='col'></div>
            </div>

        </div>
    )
}