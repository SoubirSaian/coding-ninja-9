import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    
    return (
        <nav className="nav-bar">
            <div>
                <h2><i>logo</i></h2>
            </div>
            <ul>
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/service">Service</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                
            </ul>
        </nav>
    );
};

export default Header;