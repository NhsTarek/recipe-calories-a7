import Cocks from "../Cocks/Cocks";
import Newcock from "../Newcock/Newcock";



const Cook = ({ cock, handlePrepare, newcock }) => {
    return (
        <div className="md:1/3 text-center rounded-xl shadow-xl my-5">
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
                cock.map((cock, index) => <Cocks
                    key={cock.recipe_id}
                    cocks={cock} index={index}
                    handlePrepare={handlePrepare}
                ></Cocks>)
            }
            <div>
                <h2 className="text-[#282828] font-semibold text-2xl my-2 mx-2">Currently    Cooking: {newcock.length}</h2>
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
                    {
                        newcock.map((newcock, index) =><Newcock
                        newcock={newcock}
                         index={index}
                         key={cock.recipe_id} 
                         ></Newcock>)
                    }
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