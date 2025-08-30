import './Navbar.css';
import Logo from '../components/Logo'
import AddButton from "./buttons/AddButton";
import {Link} from "react-router-dom";
import {AuthContext} from "../context/AuthContext";
import {useContext} from "react";


export default function Navbar() {
    const {user, logout} = useContext(AuthContext);
    return (
        <nav id="top" className='d-flex flex-column flex-md-row row-gap-2'>
            <Link to='/' className="align-self-center">
                <Logo />
            </Link>
            <div className="d-flex justify-content-around align-items-center">
                <Link to='/add'>
                    <AddButton />
                </Link>
                <Link to='/login'>
                    <button className='btn' style={{color: "var(--primary-color"}}>Login</button>
                </Link>
                <Link to='/register'>
                    <button className='btn' style={{color: "var(--primary-color"}}>Register</button>
                </Link>
            </div>
        </nav>
    )
}