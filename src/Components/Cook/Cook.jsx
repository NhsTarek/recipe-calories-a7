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
                cock.map(cock => <Cocks key={cock.id} cocks={cock}></Cocks>)
            }
            
        </div>
    );
};

export default Cook;