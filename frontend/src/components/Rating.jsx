import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

export default function Rating({rating}) {
    return (
        <div className="d-flex column-gap-1">
            {
                [...Array(rating)].map((_, i) => {
                    return <FontAwesomeIcon key={i} icon={faStar} style={{ color: i < rating ? "#f1a707" : "#d3d3d3" }}  />
                })
            }
        </div>
    )
}