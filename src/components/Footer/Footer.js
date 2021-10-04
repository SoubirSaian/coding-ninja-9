import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer row row-cols-1 row-cols-md-2">
            <div className="col d-flex flex-column justify-content-center align-items-center">
                <h5>follow us on :</h5>
                <span><i class="fab fa-facebook-square social-icon"></i><i class="fab fa-twitter-square social-icon"></i><i class="fab fa-instagram-square social-icon"></i><i class="fab fa-youtube-square social-icon"></i><i class="fab fa-linkedin social-icon"></i></span>
                <p>Coding ninjas &copy; 2021</p>
 
            </div>
            <div className="col">
                <h6>Contact us:</h6>
                <p>+91-8945993088</p>
                <p>soubir2018@gmail.com</p>
            </div>
        </div>
    );
};

export default Footer;