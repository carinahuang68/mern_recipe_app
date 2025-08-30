import './Logo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCookieBite } from '@fortawesome/free-solid-svg-icons'

export default function Logo() {
    return (
        <div id="logo" className=''>
            <span>MyRecipe</span><FontAwesomeIcon icon={faCookieBite} />
        </div>
    )
}