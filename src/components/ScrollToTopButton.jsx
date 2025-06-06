// src/components/ScrollToTopButton.jsx
import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import "../assets/css/utils/scrolltotopbutton.css";

export default function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 300);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        isVisible && (
            <button onClick={scrollToTop} className="scroll-to-top">
                <FaArrowUp />
            </button>
        )
    );
}
