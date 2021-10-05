import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../images/R.png';
import './Header.css';

    //    navigation bar and logo
    
const Header = () => {
    return (
            <nav className="nav-bar">
                <div className="navbar-img">
                    <img src={img} alt="" />
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
                    <li>
                        <Link to="/testimonials">Testimonials</Link>
                    </li>
                </ul>
            </nav>    
    );
};

export default Header;

