import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const authorize = async () => {
            const token = localStorage.getItem('token');
            // if (token) {
            //     axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            //     await axios.get('/api/auth/me')
            //         .then(response => setUser(response.data))
            //         .catch(() => {
            //             localStorage.removeItem('token');
            //             setUser(null);
            //         });
            // }
            if (token) {
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                try {
                  const response = await axios.get('/api/auth/me');
                  setUser(response.data);
                } catch (err) {
                  // If backend says 401, token is invalid
                  console.error("Auth error:", err);
                  localStorage.removeItem('token');
                  setUser(null);
                }
              }
        };
        authorize();
    }, [])

    const login = async (email, password) => {
        const res = await axios.post('/api/auth/login', {
            email,
            password
        });
        localStorage.setItem("token", res.data.token);
        axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.token}`;
        setUser(res.data);
    }

    const register = async (username, email, password) => {
        const res = await axios.post('/api/auth/register', {
            username, email, password
        })
        localStorage.setItem("token", res.data.token);
        axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.token}`;
        setUser(res.data);
    }

    const logout = () => {
        localStorage.removeItem('token');
        delete axios.defaults.headers.common["Authorization"];
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{ user, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    )

}

