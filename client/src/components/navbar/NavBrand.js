import React from 'react'
import { Link } from "react-router-dom";

const NavBrand = () => {
    return (
        <a className="brand-link" href="/">
        <div className="brand">
           
            <div className="brand-name">
                <h1> FootScore </h1>
            </div>
            
            <div className="brand-logo">
                <img src="./logo-brand.png" className="logo" alt="brand-image" />
            </div>
            
        </div>
        </a>
    )
}

export default NavBrand
