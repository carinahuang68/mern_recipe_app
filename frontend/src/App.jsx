
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Navbar from './components/Navbar';
import {AuthProvider} from './context/AuthContext';
import Register from './pages/Register';
import Login from './pages/Login';
import Add from './pages/Add';


import './App.css';

function App() {
    return (
        <AuthProvider>
            <main>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path='/add' element={<Add />} />
                </Routes>
            </main>

        </AuthProvider>
    )
}

export default App
