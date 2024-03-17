import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";


const Recipes = () => {
    const [recipes, setRecipes] = useState([]);
    useEffect(() =>{
        fetch('recipes.json')
        .then(res => res.json())
        .then(data => setRecipes(data))
    },[])
    return (
        <div className="md:w-2/3">
            <h2 className="text-4xl">Recipes: {recipes.length}</h2>
            {
                recipes.map(recipe =><Recipe 
                    recipe={recipe}
                    ></Recipe>)
            }
        </div>
    );
};

export default Recipes;