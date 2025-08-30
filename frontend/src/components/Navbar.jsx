import './Navbar.css';
import Logo from '../components/Logo'
import AddButton from "./buttons/AddButton";


export default function Navbar() {
    return (
        <div id="top" className='d-flex flex-column flex-md-row row-gap-2 shadow-bottom'>
            <Logo />
            <AddButton />
        </div>
    )
}