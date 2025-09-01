import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Rating from "../components/Rating";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPenToSquare, faHouse } from '@fortawesome/free-solid-svg-icons'

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
        <div className="container mt-2 mb-5">
            <div className="row">
                <div className="col-lg">
                    <h1 className="my-4">{recipe.name}</h1>
                </div>
            </div>
            <div className="row">
                <div className="col col-md-6 col-12">
                    <img src={recipe.image} alt={recipe.name} className="img-fluid mb-4 object-fit-cover" style={{ maxHeight: '60vh' }} />
                    
                </div>
                <div className="col col-md-6 col-12 d-flex flex-column gap-2">
                    <div className="mb-3 d-flex gap-2">
                        <strong>Category: </strong> {recipe.catagory}
                    </div>
                    <div className="mb-3 d-flex gap-2">
                        <strong>Difficulty: </strong> {recipe.difficulty}
                    </div>
                    <div className="mb-3 d-flex align-items-center gap-2">
                        <strong>Rating: </strong> <Rating rating={recipe.rating} />
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
                    <div className="d-flex gap-3 pb-5">
                        <button className='btn primary-color btn-md'><FontAwesomeIcon icon={faHouse} /> Back</button>
                        <button className='btn edit-btn primary-color'>Edit <FontAwesomeIcon icon={faPenToSquare} /></button>
                        <button className='btn delete-btn primary-color'>Delete <FontAwesomeIcon icon={faTrash} /></button>
                    </div>
                </div>
            </div>
            {/* <div className="row mt-3">
                <div className="col col-lg-6 d-flex gap-3">
                    <button className='btn'>Back</button>
                    <button className='btn edit-btn'>Edit <FontAwesomeIcon icon={faPenToSquare} /></button>
                    <button className='btn delete-btn'>Delete <FontAwesomeIcon icon={faTrash} />
                    </button>
                </div>
                <div className="col col-6">
                </div>
            </div> */}
        </div>
    );

}