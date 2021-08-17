import React from 'react'
import { Link } from "react-router-dom";
import './App.css';
function Navbar() {
    return(
        <div className="Navbar">
            <nav id="nav">
                    <img src="" alt="" id="navlogo"/>
                    <ul>
                        <li><Link to="/" className="active">Home</Link></li>
                        <li><link to="/About-Us"/>About-Us</li>
                        <li><link to="/"/>Our-Products</li>
                        <li><Link to="/Contact-Us">Contact-Us</Link></li>
                        <li><link to="/"/>Order-Now</li>
                    </ul>

                    <input type="search" className="search" name="search" placeholder="Search Product" autocomplete="off"/>
                    <ul>
                        <li className="login"><link to="/"/>Login</li>
                    </ul>
            </nav>
        </div>
    )
}

export default Navbar;
