import React from "react";

function Nav() {
    return (// can use html components inside the return. Pretty simple nav bar 3 items inside a ul
        <nav className="navBar">
            <ul>
                <li>Home</li>
                <li>Portafolio</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
};

export default Nav; 