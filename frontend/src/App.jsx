
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Navbar from './components/Navbar';
import {AuthProvider} from './context/AuthContext';
import Register from './pages/Register';
import Login from './pages/Login';
import AddRecipe from './pages/AddRecipe';
import RecipeDetail from './pages/RecipeDetail';


import './App.css';

function App() {
    
    return (
        <AuthProvider>
            <Navbar />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path='/add' element={<AddRecipe />} />
                    <Route path='/recipe/:id' element={<RecipeDetail />}/>
                </Routes>
            </main>

        </AuthProvider>
    )
}

export default App
