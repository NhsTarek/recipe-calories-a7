import Cocks from "../Cocks/Cocks";



const Cook = ({ cock }) => {
    return (
        <div className="md:1/3 text-center">
            <h2 className="text-[#282828] font-semibold text-2xl">Want to cook: {cock.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                        </tr>
                    </thead>

                </table>
            </div>
            {
                cock.map(cock => <Cocks key={cock.recipe_id} cocks={cock}></Cocks>)
            }
            <div>
                <h2 className="text-[#282828] font-semibold text-2xl my-2">Currently Cooking:</h2>
                <div className="overflow-x-auto my-2">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                        </tr>
                    </thead>

                </table>
                <div className="my-5">
                <h6>Total Time =</h6>
                <h6>Total Calories =</h6>
                </div>
            </div>
            
            </div>
        </div>
    );
};

export default Cook;