import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
    <header className="header">
        <div className="header-container">
        <div className="logo">
            <Link to="/" onClick={() => setMenuOpen(false)}>
            <img src="/images/oricle-logo.png" alt="Website Logo" />
            </Link>
        </div>
        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
            <ul>
            <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
            <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
            </ul>
        </nav>
        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
            <span className="hamburger"></span>
        </button>
        </div>
    </header>
    );
};

export default Header;
