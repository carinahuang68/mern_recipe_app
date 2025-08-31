import './Home.css'
import Cards from "../components/Cards";
import { useState, useEffect } from "react";
import Catagories from "../components/Catagories";
import axios from 'axios';

export default function Home() {
    const [recipes, setRecipes] = useState([]);
    const [catagory, setCategory] = useState("All");

    const catagories = ["All", "Breakfast", "Lunch", "Dinner", "Dessert", "Snack"];
    useEffect(() => {
        const fetchRecipe = async () => {
            const res = await axios.get(`/api/recipes/${catagory && catagory !== "All" ?
                `?catagory=${catagory}` : ""}`);
            setRecipes(res.data);
        }
        fetchRecipe();
    }, [catagory]);

    // TODO: fix to render recipe immediately
    useEffect(() => {
        const fetchRecipe = async () => {
            const res = await axios.get(`/api/recipes/${catagory && catagory !== "All" ?
                `?catagory=${catagory}` : ""}`);
            setRecipes(res.data);
        }
        fetchRecipe();
    }, []);

    
    if (!recipes) return <div>Loading...</div>;

    return (
        <div className="mt-4">
            <Catagories catagories={catagories} selectCatagory={setCategory} />
            <Cards recipes={recipes} />
        </div>
    )
}