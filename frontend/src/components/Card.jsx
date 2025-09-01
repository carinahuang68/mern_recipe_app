
import { use } from 'react';
import './Card.css'
import Rating from './Rating';
import CardButtons from './buttons/CardButtons';
import { useNavigate } from 'react-router-dom';


export default function Card({ recipe }) {
    const navigate = useNavigate();

    const handleCardClick = () => {
        const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
        if (!isTouchDevice) {
            navigate(`/recipe/${recipe._id}`);
        }
    }
    return (
        <div className='col-xxl-3 col-xl-4 col-md-6 col-sm-12 mb-4'>
            <div className="card shadow rounded-4" onClick={handleCardClick}>
                <img src={recipe.image} alt={recipe.name} className="card-img-top rounded-top-4 object-fit-cover" style={{ height: '25vh' }} />
                <div className="card-body p-4 d-flex flex-column align-items-center row-gap-3">
                    <div className="card-title">{recipe.name}</div>
                    {/* <div className="card-text">Category {recipe.catagory}</div> */}
                    <Rating rating={recipe.rating} />
                    <button id="view-button" className='touch-only' onClick={() => navigate(`/recipe/${recipe._id}`)}>View Recipe</button>
                </div>
            </div>
        </div>

    )
}