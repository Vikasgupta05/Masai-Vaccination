import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export const Dashboard = () => {

    var [count , setcount] = useState(0)
    var data= JSON.parse(localStorage.getItem("data")) || [];

    // useEffect(() => {
    //     handeldelete()
    // },[count])

    const handeldelete = (index) => {
        data.splice(index,1)
        localStorage.setItem("data" , JSON.stringify(data))
        // setcount(count+1)
    }

    return(
        <div>
        <h1>DASHBOARD</h1>

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
                                <th  className="table">Delete</th>
                                <th  className="table">Vaccinate</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data?.map((el , index ) => {
                                return (
                                    <tr key={index}>
                                        <td className="table">{el.unique}</td>
                                        <td className="table">{el.name}</td>
                                        <td className="table">{el.age}</td>
                                        <td className="table">{el.priority}</td>
                                        <td className="table">{el.designation}</td>
                                        <td className="table">{el.vaccine}</td>
                                        <td className="table"><button>Delete</button></td>
                                        <td className="table"><button 
                                                onClick={handeldelete(index)}
                                            >Vaccinate</button></td>


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

