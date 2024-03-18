import { CiClock2 } from "react-icons/ci";
import { GoFlame } from "react-icons/go";


const Recipe = ({ recipe, handleCock,cock }) => {
    const { recipe_name, recipe_image, short_description, ingredients, preparing_time, calories } = recipe;
    

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={recipe_image} alt="Shoes" className="rounded-xl max-w-full max-h-full" />
            </figure>
            <div className="card-body ">
                <h2 className="card-title">{recipe_name}</h2>
                <p className="border-b-2 py-4">{short_description}</p>
                <h6>Ingredients: {ingredients.length}</h6>
                <ul className="border-b-2 py-5 list-disc">
                    {ingredients.map((ing, index) => <li key={index}>{ing}</li>)}
                </ul>
                <div className="flex justify-between">
                    <div className="flex gap-4 items-center">
                        <span><CiClock2 /></span>
                        <p>{preparing_time} Minutes</p>
                    </div>
                    <div className="flex gap-4 items-center">
                        <span><GoFlame /></span>
                        <p>{calories} Calories</p>
                    </div>
                </div>
                
                    <button 
                      onClick={()=> handleCock(recipe)}
                        className="bg-[#0BE58A] text-[#150B2B] font-medium rounded-full py-4 mx-20">
                        Want to Cook
                    </button>
            
            </div>
        </div>
    );
};

export default Recipe;
