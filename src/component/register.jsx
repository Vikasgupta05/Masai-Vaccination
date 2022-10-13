import React from "react";
import { useState } from "react";

export const Register = () => {

    const [Unique , setUnique] = useState()
    const [Name , setName] = useState()
    const [Age , setAge] = useState()
    const [Designation , setDesignation] = useState()
    const [Priority , setPriority] = useState()
    const [Vaccine , setVaccine] = useState()


    const data = {
        unique : Unique ,
        name : Name,
        age : Age,
        designation : Designation,
        priority : Priority,
        vaccine : Vaccine,
    }
    

    const handelSubmit = () => {


       var  taskdata = localStorage.setItem("data", JSON.stringify(data)) || []
        alert("Add succesfully")
    }




    return(
        <div>
            <h1>Register</h1>


            <div>

                <label>unique Id</label>
                <input 
                    type="number"
                    placeholder="Enter Id"
                    onChange={(e) => {
                        setUnique(e.target.value)
                    }}
                /> 
                <br />
        
                <label>Name</label>
                <input 
                    type="text"
                    placeholder="Enter Name"
                    onChange={(e) => {
                        setName(e.target.value)
                    }}
                /> 
                <br />


                <label>Age</label>
                <input 
                    type="number"
                    placeholder="Enter age"
                    onChange={(e) => {
                        setAge(e.target.value)
                    }}
                /> 
                <br />


                <label>Designation</label>
                <input 
                    type="text"
                    placeholder="Enter designation"
                    onChange={(e) => {
                        setDesignation(e.target.value)
                    }}
                /> 
                <br />



                <label>Priority</label>
                <input 
                    type="text"
                    placeholder="Enter Priority"
                    onChange={(e) => {
                        setPriority(e.target.value)
                    }}
                /> 
                <br />

                <label>Vaccine</label>
                <input 
                    type="text"
                    placeholder="Enter Vaccine"
                    onChange={(e) => {
                        setVaccine(e.target.value)
                    }}
                /> 
                <br />


                <button
                    onClick={handelSubmit}
                >Add</button>
            </div>
        </div>
    )
}

