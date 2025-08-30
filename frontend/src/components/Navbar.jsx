import './Navbar.css';
import Logo from '../components/Logo'
import AddButton from "./buttons/AddButton";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";


export default function Navbar() {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login')
    }

    return (
        <nav id="top" className='d-flex flex-column flex-sm-row row-gap-2'>
            <Link to='/' className="align-self-center">
                <Logo />
            </Link>
            <div className="d-flex justify-content-around align-items-center">
                {user ? (
                    <>
                        <Link to='/add'>
                            <AddButton />
                        </Link>
                        <button className='btn auth-btn' onClick={handleLogout}>Logout</button>
                    </>
                ) : (
                    <div>
                        <Link to='/login'>
                            <button className='btn auth-btn'>Login</button>
                        </Link>
                        <Link to='/register'>
                            <button className='btn auth-btn'>Register</button>
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    )
}