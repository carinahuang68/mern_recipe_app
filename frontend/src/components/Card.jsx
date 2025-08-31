
import { use } from 'react';
import './Card.css'
import Rating from './Rating';
import CardButtons from './buttons/CardButtons';
import {useNavigate} from 'react-router-dom';


export default function Card({ recipe }) {
    const navigate = useNavigate();
    return (
        <div className='col-xxl-3 col-xl-4 col-md-6 col-sm-12 mb-4'>
            <div className="card shadow rounded-4" onClick={() => navigate(`/recipe/${recipe._id}`)}>
                <img src={recipe.image} alt={recipe.name} className="card-img-top rounded-top-4 object-fit-cover" style={{height:'25vh'}} />
                <div className="card-body p-4 d-flex flex-column align-items-center row-gap-3">
                    <div className="card-title">{recipe.name}</div>
                    <Rating rating={recipe.rating} />
                    {/* <CardButtons /> */}
                </div>
            </div>
        </div>

    )
}