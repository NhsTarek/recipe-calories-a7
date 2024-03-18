const Newcock = ({newcock,index}) => {
    const { recipe_name, preparing_time, calories, recipe_id } = newcock;
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                <tbody>
                        {/* row 1 */}
                        
                        <tr className="bg-base-200 py-2">
                            <th>{index+1}</th>
                            <td>{recipe_name}</td>
                            <td>{preparing_time} Minutes</td>
                            <td>{calories}</td>
                        </tr>
                    </tbody> 
                    
                </table>
            </div>
        </div>
    );
};

export default Newcock;
