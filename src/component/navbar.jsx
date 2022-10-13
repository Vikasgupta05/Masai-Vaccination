import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return(
        <div className="Navbar">
            <div  style={{display : "flex" , justifyContent : "space-between"}}>
            <Link to="/">dashboard</Link>
            <Link to="/vaccinated">vaccinated</Link>
            <Link to="/register">Register</Link>
            </div>
        </div>
    )
}