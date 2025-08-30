import { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import '../components/buttons/buttons.css'

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(email, password);
            navigate('/');
        } catch (err) {
            console.error("Login error: ", err);
            alert("Failed to login. Please try again.");
        }
    }

    return (
        <div className="container mt-4">
            <div className='row'>
                <div className='col'></div>
                <div className='col-lg-6 col-md-8'>
                    <form onSubmit={handleSubmit}>
                        <h1 className='py-3 text-center'>Login</h1>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input className="form-control"
                                type="email" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required/>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input className="form-control"
                                type="password" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required/>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <button className='btn auth-btn' onClick={() => navigate('/')} style={{color: 'var(--primary-color)'}}>Cancel</button>
                            <button type="submit" className="btn btn-primary align-self-center scale-button" style={{ backgroundColor: 'var(--primary-color)', borderColor: 'var(--primary-color)' }}>Login</button>
                        </div>

                    </form>
                </div>
                <div className='col'></div>
            </div>

        </div>

    )
}