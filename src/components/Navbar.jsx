import React, { useState } from "react";
import "../assets/css/components/navbar.css";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <header className="header">
            <nav className="navbar">
                <div className="logo"><strong>MyPortfolio</strong></div>

                <div className={`hamburger ${menuOpen ? "active" : ""}`} onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>

                <ul className={`nav-links ${menuOpen ? "open" : ""}`} id="navLinks">
                    <li><a href="#home" className="active">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Technical Skills</a></li>
                    <li><a href="#professional-skills">Professional Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}
