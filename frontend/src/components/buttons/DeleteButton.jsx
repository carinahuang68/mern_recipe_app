import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import './buttons.css'

export default function DeleteButton({onClick}) {
    return (
        <button type="button" className="mini-button" id="delete-btn" onClick={onClick}>
            <FontAwesomeIcon icon={faTrash} />
        </button>
    )
}