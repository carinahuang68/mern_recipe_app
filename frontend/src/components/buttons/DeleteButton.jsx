import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import './buttons.css'

export default function DeleteButton() {
    return (
        <button className="mini-button" id="delete-btn">
            <FontAwesomeIcon icon={faTrash} />
        </button>
    )
}