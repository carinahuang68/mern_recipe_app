import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import './buttons.css'

export default function DeleteButton() {
    return (
        <button className="mini-button" id="edit-btn">
            <FontAwesomeIcon icon={faPenToSquare}/>
        </button>
    )
}