import React from "react";

export const Vaccinated = () => {

    var vaccine= JSON.parse(localStorage.getItem("vaccine")) || [];
    


    return(
        <div>
            <h1>Vaccinated</h1>

            <div className="maindiv">
                <table className="table">
                        <thead>
                            <tr>
                                <th className="table">id</th>
                                <th  className="table">Name</th>
                                <th  className="table">Age</th>
                                <th  className="table">Designation</th>
                                <th  className="table">Priority</th>
                                <th  className="table">Vaccine</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                vaccine?.map((el , index ) => {
                                return (
                                    <tr key={index}>
                                        <td className="table">{el.unique}</td>
                                        <td className="table">{el.name}</td>
                                        <td className="table">{el.age}</td>
                                        <td className="table">{el.priority}</td>
                                        <td className="table">{el.designation}</td>
                                        <td className="table">{el.vaccine}</td>
                                    </tr>
                                )
                                })
                            }
                        </tbody>
                </table>
            </div>


        </div>
    )
}

