import { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import '../components/buttons/buttons.css'

export default function Register() {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { register } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await register(username, email, password);
            navigate('/');
        } catch (err) {
            console.error("Registration error: ", err);
            alert("Registration failed. Please try again.");
        }
    }

    return (
        <div className="container mt-4">
            <div className='row'>
                <div className='col'></div>
                <div className='col-lg-6 col-md-8'>
                    <form onSubmit={handleSubmit}>
                        <h1 className='py-3 text-center'>Register</h1>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
                            <input className="form-control" 
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)} 
                                required/>
                        </div>
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
                            <button type="submit" className="btn btn-primary align-self-center scale-button" style={{ backgroundColor: 'var(--primary-color)', borderColor: 'var(--primary-color)' }}>Register</button>
                        </div>

                    </form>
                </div>
                <div className='col'></div>
            </div>

        </div>

    )
}