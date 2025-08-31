import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Rating from "../components/Rating";

export default function RecipeDetail() {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        const fetchRecipe = async () => {
            const res = await axios.get('/api/recipes/' + id);
            setRecipe(res.data);
        }
        fetchRecipe();
    }, [id]);



    if (!recipe) return <div>Loading...</div>;

    return (
        <div className="container">
            <div className="row">
                <div className="col-4-lg">
                    <h1 className="my-4">{recipe.name}</h1>
                    <img src={recipe.image} alt={recipe.name} className="img-fluid mb-4" />
                </div>
                <div className="col-4-lg">
                    <div className="mb-3 d-flex gap-2">
                        <strong>Difficulty: </strong> {recipe.difficulty}
                    </div>
                    <div className="mb-3 d-flex align-items-center gap-2">
                        <strong>Rating: </strong> <Rating rating={recipe.rating} />
                    </div>
                    <div className="mb-3">
                        <h3>Ingredients:</h3>
                        <ul>
                            {recipe.ingredients.map((ingredient, index) => (
                                <li key={index}>{ingredient}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="mb-3">
                        <h3>Instructions:</h3>
                        {
                            recipe.instructions === "" ? <p>No instructions provided.</p> :
                                recipe.instructions.split('\n').map((step, index) => (
                                    <div key={index}>{step}</div>
                                ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );

}