import React from "react";
import "./Navbar.css"
import Logo from "./Nokia-Logo-white.png";
import "./Style.css";
import {  BiSearchAlt } from "react-icons/bi";
const Navbar = () =>{
    return(
        <div className="header-container">
        <div className="header">
            <div><img src={Logo} alt="Nokia Logo" className="header-logo"/></div>
            
            <div className="search">   
             <BiSearchAlt className="search-icon" />
          
            
            <input type="text" className="searchbar" placeholder="Search Item Here" ></input><button className="search-button">Search</button></div>

           
        </div>
        </div>
    )
}

export default Navbar;