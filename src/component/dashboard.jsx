import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export const Dashboard = () => {

    var [vacData , setvacData] = useState([])
    var [ data  , setdata ]=  useState( JSON.parse(localStorage.getItem("data")) || [])
    var [status , setStatus] = useState(true)

    const handeldelete = (index) => {
        // data.splice(index,1)
        // localStorage.setItem("data" , JSON.stringify(data))
        // setcount(count+1)
    }


    var vaccinedata = localStorage.setItem("vaccine", JSON.stringify(vacData)) || []

    const Handelvaccine = (el) => {
        vaccinedata.push(el);
        localStorage.setItem("vaccine", JSON.stringify(vaccinedata))
        alert("vaccination succesfully")
    }

    const Handelage = () => {

    }


    function handel_name(){
        let All_data = data  
      
        if(status == true){
            All_data.sort( function (a,b){
              return Number(a.id) - Number(b.id);
            })
            setStatus(false)
        }
        else if(status == false){
            All_data.sort( function (a,b){
                return  Number(b.id)-Number(a.id);
            })
            setStatus(true)
        }
        setdata(All_data);
      
        console.log("asaa",All_data)
    }

    return(
        <div>
        <h1>DASHBOARD</h1>

            <button
                onClick={handel_name}
            >sort by name</button>

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
                                        <td className="table"><button
                                            //   onClick={handeldelete(index)}
                                        >Delete</button></td>
                                        <td className="table"><button 
                                                onClick={(() => {
                                                    Handelvaccine(el)
                                                })}

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

