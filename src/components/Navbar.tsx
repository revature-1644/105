import React from "react";
import { Link } from "react-router-dom";

export function Navbar(){
    return (
        <>
        <Link to="/Home">Home page</Link>
        <Link to="/Login">Login page</Link>
        </>
    )
} 