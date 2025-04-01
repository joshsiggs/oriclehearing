import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Header = () => {

    useEffect(() => {
        // Manually attach the submit listener to the form
        const mobileMenu = document.getElementById("menu-button");
        if (mobileMenu) {
            mobileMenu.addEventListener("click", toggleMenu);
        }
    
        return () => {
            if (mobileMenu) {
                mobileMenu.removeEventListener("click", toggleMenu);
            }
        };
    }, []);

return (
    <header className="header">
    <div className="header-container">
        <div className="logo">
        <Link to="/">
            <img src="/images/oricle-logo.png" alt="Website Logo" />
        </Link>
        </div>
        {/* Assign id "mobile-menu" for the external script */}
        <nav id="mobile-menu" className="nav">
        <ul>
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/about">About</Link>
            </li>
            <li>
            <Link to="/contact">Contact</Link>
            </li>
        </ul>
        </nav>
        {/* Assign id "menu-button" so the external script can attach the click event */}
        <button id="menu-button" className="menu-toggle" aria-label="Toggle menu">
        <span className="hamburger"></span>
        </button>
    </div>
    </header>
);
};

export default Header;
