
import axios from "axios";
import RecipeForm from "../components/RecipeForm";
import { useNavigate } from "react-router-dom";

export default function AddRecipe() {
    const navigate = useNavigate();
    const initialData = {
        name: "",
        image: "",
        difficulty: "",
        rating: 0,
        ingredients: [],
        instructions: "",
        catagory: "",
        public: true
    }

    const onSubmit = async (data) => {
        try {
            await axios.post('/api/recipes', data);
            navigate('/');
        } catch (err) {
            console.error("Error adding recipe: ", err);
            alert("Failed to add recipe. Please try again.");
        }
    }

    return (
        <div className="container mt-4">
            <div className='row'>
                <div className='col'></div>
                <div className='col-md-8'>
                    <h1 className='py-3 text-center'>Add Recipe</h1>
                    <RecipeForm initialFormData={initialData} onSubmit={onSubmit} submitLabel={"Create"}/>
                </div>
                <div className='col'></div>
            </div>

        </div>
    )
}