import { CiClock2 } from "react-icons/ci";


const Recipe = ({ recipe }) => {
    console.log(recipe);
    const { recipe_name, recipe_image,short_description,ingredients,preparing_time } = recipe;
    return (
        <div className="grid grid-cols-2 gap-4">
            
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={recipe_image} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{recipe_name}</h2>
                        <p className="border-b-2 py-4">{short_description}</p>
                        <h6>Ingredients: {ingredients.length}</h6>
                        <ul className="border-b-2 py-5">
                            {
                                  ingredients.map(ing =><li>{ing}</li>)
                            }
                        </ul>
                        <div>
                           <span><CiClock2 />{preparing_time}Min</span>
                        </div>
                    </div>
                </div>
            
        </div>
    );
};

export default Recipe;