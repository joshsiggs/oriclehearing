import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Clear Hearing</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/article">Article</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;