import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import penguin from './images/penguin2.png';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNav = () => {
        setIsOpen(!isOpen); // Toggle the nav visibility
    };

    const closeNav = () => {
        setIsOpen(false); // Close the nav when a link is clicked
    };

    return (
        <>
            {/* Hamburger Button outside of the nav */}
            <div className="hamburger" onClick={toggleNav}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            {/* Navbar container */}
            <nav className={`nav ${isOpen ? 'open' : ''}`}>
                <div className="header">
                    <img src={penguin} className="logo" alt="Logo" />
                    <div className="site-title">WaddleWell</div>
                </div>
                <ul>
                    <li>
                        <Link to='/Home' onClick={closeNav}>Home</Link>
                    </li>
                    <li>
                        <Link to='/Profile' onClick={closeNav}>Profile</Link>
                    </li>
                    <li>
                        <Link to='/Report' onClick={closeNav}>Report</Link>
                    </li>
                    <li>
                        <Link to='/Symptom' onClick={closeNav}>Symptoms</Link>
                    </li>
                    <li>
                        <Link to='/HealthTool' onClick={closeNav}>Health Tool</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}