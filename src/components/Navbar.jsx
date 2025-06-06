import React, { useState, useEffect } from "react";
import "../assets/css/components/navbar.css";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY) {
                setShowNavbar(false); // scrollar ner → göm navbar
            } else {
                setShowNavbar(true); // scrollar upp → visa navbar
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <header className={`header ${showNavbar ? "" : "header--hidden"}`}>
            <nav className="navbar">
                <div className="logo"><strong>My <span>Portfolio</span></strong></div>

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
                    <li><a href="#MyPreviousExperience">Previous Experience</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}
