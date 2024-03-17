

const Cocks = ({ cocks }) => {
    const { recipe_name,preparing_time,calories,recipe_id } = cocks;
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <tbody>
                        {/* row 1 */}
                        <tr className="bg-base-200 py-2">
                            <td>{recipe_name}</td>
                            <td>{preparing_time} Minutes</td>
                            <td>{calories}</td>
                            <button className="bg-[#0BE58A] rounded-full p-5">Preparing</button>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Cocks;