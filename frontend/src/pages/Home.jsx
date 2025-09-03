import './Home.css'
import Cards from "../components/Cards";
import { useState, useEffect, useContext } from "react";
import Catagories from "../components/Catagories";
import axios from 'axios';
import { AuthContext } from "../context/AuthContext";
import { Link } from 'react-router-dom';


export default function Home() {
    const { user } = useContext(AuthContext);
    const [recipes, setRecipes] = useState([]);
    const [catagory, setCategory] = useState("All");

    const catagories = ["All", "Breakfast", "Meal", "Dish", "Dessert", "Other"];

    useEffect(() => {
        const fetchRecipe = async () => {
            const res = await axios.get(`/api/recipes/${catagory && catagory !== "All" ?
                `?catagory=${catagory}` : ""}`);
            setRecipes(res.data);
        }
        fetchRecipe();
    }, [catagory, user]);

    // if (!recipes) return <div>Loading...</div>;
    if (!user) return (
        <div className='container'>
            <div className="row">
                <div className='col'></div>
                <div className='col-lg-8 col-md-12'>
                    <div className="d-flex flex-column align-items-center mt-5">
                            <h4 className='mb-3'>Waiting for user authentication...</h4>
                            <p className='text-secondary'>Please <Link to='/login'><a className='link'>login</a></Link> or <Link to='/register'><a className='link'>register</a></Link> an account!</p>
                            <h4 className='my-4'>Sample page</h4>
                            <img src="/images/MyRecipe.png" className='img-fluid' style={{ border: "2px solid var(--primary-color)" }}></img>
                    </div>
                </div>
                <div className='col'></div>
            </div>
        </div>
    )


    return (
        <div className="mt-4">
            <Catagories catagories={catagories} selectCatagory={setCategory} />
            <Cards recipes={recipes} />
        </div>
    )
}