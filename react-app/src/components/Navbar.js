import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import penguin from './images/penguin2.png';

export default function Navbar() {
    // State to manage the visibility of the navigation menu
    const [isOpen, setIsOpen] = useState(false);

    // Function to toggle the navigation menu
    const toggleNav = () => {
        setIsOpen(!isOpen); // Toggle the nav visibility
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
                        <Link to='/Profile'>Profile</Link>
                    </li>
                    <li>
                        <Link to='/Home'>Home</Link>
                    </li>
                    <li>
                        <Link to='/Report'>Report</Link>
                    </li>
                    <li>
                        <Link to='/Symptom'>Symptoms</Link>
                    </li>
                    <li>
                        <Link to='/HealthTool'>Health Tool</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}
