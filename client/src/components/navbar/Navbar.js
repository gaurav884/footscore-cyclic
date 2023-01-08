import React from 'react'
import NavLinks from './NavLinks';
import NavBrand from "./NavBrand";
import SocialMediaIcons from "./SocialMediaIcons"

const Navbar = () => {
    return (
        <nav>
            <div className="nav-container"  id="navbar-id">
                 <NavBrand />

                 <NavLinks />

                <SocialMediaIcons />

            </div>
        </nav>
    )
}

export default Navbar
