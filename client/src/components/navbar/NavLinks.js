import React from 'react'
import { Link } from "react-router-dom";
import { useState } from "react"

const NavLinks = () => {
    const [isToggle, setIsToggle] = useState(false)


    function toggler() {
       
        setIsToggle(!isToggle)
    }
    return (
        <>
            <div className={ (isToggle) ?"nav-links-container nav-mobi":"nav-links-container"}>
                <ul className="nav-links">
                    <Link onClick={toggler} className="nav-link" to="/">
                        <li >Home</li>
                    </Link>
                    <Link onClick={toggler} className="nav-link" to="/highlights">
                        <li >Highlights</li>
                    </Link>
                    <Link onClick={toggler} className="nav-link" to="/leagues">
                        <li >Leagues</li>
                    </Link>
                    <Link onClick={toggler} className="nav-link" to="/stats">
                        <li >Stats</li>
                    </Link>
                    
                </ul>


            </div>
            <div className="toggle-button"
                onClick={toggler}
            >   
                <span className="toggle-bars" />
                <span className="toggle-bars" />
                <span className="toggle-bars" />
            </div>
        </>
    )
}

export default NavLinks
