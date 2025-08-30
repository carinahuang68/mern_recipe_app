import './Navbar.css';
import Logo from '../components/Logo'
import AddButton from "./buttons/AddButton";


export default function Navbar() {
    return (
        <nav id="top" className='d-flex flex-column flex-md-row row-gap-2'>
            <Logo />
            <div className="d-flex justify-content-around">
                <AddButton />
                <button className='btn' style={{color: "var(--primary-color"}}>Login</button>
                <button className='btn' style={{color: "var(--primary-color"}}>Register</button>
            </div>
        </nav>
    )
}