import React from "react";
import './assets/css/main.css';  // ✅ korrekt
import Hero from "./components/Hero"; // Importing the Hero component
import About from './components/About';
import TechnicalSkills from './components/TechnicalSkills'; // Importing the TechnicalSkills component
import ProfessionalSkills from './components/ProfessionalSkills';
import MyProjects from './components/MyProjects'; // Importing the MyProjects component
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import ScrollToTopButton from "./components/ScrollToTopButton";
import PreviousExperience from "./components/PreviousExperience";



function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <TechnicalSkills />
            <ProfessionalSkills />
            <MyProjects />
            <PreviousExperience/>
            <Contact />

            <ScrollToTopButton /> 

        </>
    );
}
export default App;
