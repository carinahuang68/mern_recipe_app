import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Rating from "../components/Rating";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPenToSquare, faHouse } from '@fortawesome/free-solid-svg-icons'

export default function RecipeDetail() {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchRecipe = async () => {
            const res = await axios.get('/api/recipes/' + id);
            setRecipe(res.data);
        }
        fetchRecipe();
    }, [id]);

    const handleDelete = async () => {  
        if (window.confirm("Are you sure you want to delete this recipe?")) {
            try {
                await axios.delete(`/api/recipes/${id}`);
                navigate('/');
            } catch (error) {
                console.error("Error deleting recipe:", error);
            }
        }
    }

    if (!recipe) return <div>Loading...</div>;

    return (
        <div className="container mt-2 mb-5">
            <div className="row">
                <div className="col-lg">
                    <h1 className="my-4">{recipe.name}</h1>
                </div>
            </div>
            <div className="row">
                <div className="col col-md-6 col-12">
                    <img src={recipe.image} alt={recipe.name} className="img-fluid mb-4 object-fit-cover" style={{ maxHeight: '60vh' }} />
                    <button className='btn primary-color btn-md d-none d-md-block' onClick={() => navigate('/')}><FontAwesomeIcon icon={faHouse} /> Back</button>
                </div>
                <div className="col col-md-6 col-12 d-flex flex-column gap-2">
                    <div className="mb-3 d-flex gap-2">
                        <strong>Category: </strong> {recipe.catagory}
                    </div>
                    <div className="mb-3 d-flex gap-2">
                        <strong>Difficulty: </strong> {recipe.difficulty}
                    </div>
                    <div className="mb-3 d-flex align-items-center gap-2">
                        <strong>Time required: </strong> {recipe.time} min
                    </div>
                    <div className="mb-3">
                        <h3>Ingredients:</h3>
                        {recipe.ingredients.length === 0 ? <p>No ingredients provided.</p> :
                            <ul>
                                {recipe.ingredients.map((ingredient, index) => (
                                    <li key={index}>{ingredient}</li>
                                ))}
                            </ul>
                        }

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
                    <div className="d-flex gap-3">
                        <button className='btn primary-color btn-md d-inline-block d-md-none' onClick={() => navigate('/')}><FontAwesomeIcon icon={faHouse} /> Back</button>
                        <button className='btn edit-btn primary-color' onClick={() => navigate(`/edit-recipe/${id}`)}>Edit <FontAwesomeIcon icon={faPenToSquare} /></button>
                        <button className='btn delete-btn primary-color' onClick={handleDelete}>Delete <FontAwesomeIcon icon={faTrash} /></button>
                    </div>
                </div>
            </div>

        </div>
    );

}