import React from "react";
import "../assets/css/components/previousexperience.css";

export default function PreviousExperience() {
    return (
        <section id="MyPreviousExperience" className="experience-section">
            <div className="main-text">
                <h2>Previous <span>Experience</span></h2>
            </div>

            <div className="experience-list">
                <div className="experience-item">
                    <h3>Owner and Founder of FuegoDS AB</h3>
                    <p className="year"><strong>Years:</strong> 2021–</p>
                    <p>
                        Founder and leader of Fuego Dance School, a dance school specializing in Bachata Sensual. 
                        Responsible for planning and conducting dance classes, workshops, and events, as well as developing 
                        the school's operations and customer relationships. Leads classes with a focus on technique, 
                        musicality, and the joy of movement, while building a strong community of dancers through passion and dedication.
                    </p>
                </div>

                <div className="experience-item">
                    <h3>Physical Education & Health, Pedagogical Leadership, and Religious Studies</h3>
                    <p className="year"><strong>Year:</strong> 2019-2024–</p>
                    <p>
                        Experienced in teaching and inspiring students in physical education, health, and religious studies. 
                        Strong focus on developing students' understanding of physical activity, health, and well-being, as well as 
                        creating inclusive and engaging learning environments. Utilizes pedagogical leadership to motivate 
                        and support students in their personal and academic growth.

                    </p>
                </div>
            </div>

            <div className="documents">
                <a
                    href={`${import.meta.env.BASE_URL}pdf/Mikael-Daskalou-CV.pdf`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="doc-button"
                >
                    View CV
                </a>
                <a
                    href={`${import.meta.env.BASE_URL}pdf/Mikael-Daskalou-Personal-Letter.pdf`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="doc-button"
                >
                    View Personal Letter
                </a>
            </div>
        </section>
    );
}
