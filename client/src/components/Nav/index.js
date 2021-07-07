import React from "react";
import "./style.css";

const Nav = () => {
    return (
        <nav className="navbar navbar-light bg-light">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="#">Search</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" href="" type="button">Saved</a>
                    
                </li>
            </ul>            
        </nav>
    );

}

export default Nav;