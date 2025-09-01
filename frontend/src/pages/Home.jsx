import './Home.css'
import Cards from "../components/Cards";
import { useState, useEffect, useContext } from "react";
import Catagories from "../components/Catagories";
import axios from 'axios';
import { AuthContext } from "../context/AuthContext";


export default function Home() {
    const { user } = useContext(AuthContext);
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
    }, [catagory, user]);

    // if (!recipes) return <div>Loading...</div>;
    if (!user) return <div>Loading...</div>;


    return (
        <div className="mt-4">
            <Catagories catagories={catagories} selectCatagory={setCategory} />
            <Cards recipes={recipes} />
        </div>
    )
}