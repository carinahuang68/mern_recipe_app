import './buttons.css';
import { Link } from 'react-router-dom';

export default function AddButton() {
    return (
        <Link to='/add'>
            <button id="add-button">
                Add Recipe
            </button>
        </Link>

    )
}