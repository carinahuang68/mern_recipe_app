import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

export default function Rating(rating) {
    return (
        <div className="d-flex column-gap-1">
            <FontAwesomeIcon icon={faStar} style={{color: "#f1a707",}} />
            <FontAwesomeIcon icon={faStar} style={{color: "#f1a707",}} />
            <FontAwesomeIcon icon={faStar} style={{color: "#f1a707",}} />
            <FontAwesomeIcon icon={faStar} style={{color: "#f1a707",}} />
            <FontAwesomeIcon icon={faStar} style={{color: "#f1a707",}} />
        </div>
    )
}