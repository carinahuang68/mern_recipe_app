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
        <nav id="top" className='d-flex flex-column flex-sm-row row-gap-2 shadow'>
            <Link to='/' className="align-self-center">
                <Logo />
            </Link>
            {
                user && <div className='align-self-center d-none d-md-block'><h2 className='my-0 py-0'>{user.username}</h2></div>
            }
            <div className="d-flex justify-content-around align-items-center">
                {user ? (
                    <div className="d-flex gap-3">
                        <AddButton />

                        <button className='btn auth-btn' onClick={handleLogout}>Logout</button>
                    </div>
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