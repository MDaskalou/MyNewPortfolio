import React, { useState } from "react";
import myProjectsData from "../data/myProjectsData";
import "../assets/css/components/myprojects.css";

export default function MyProjects() {
    const [activeProject, setActiveProject] = useState(null);

    const openModal = (project) => setActiveProject(project);
    const closeModal = () => setActiveProject(null);

    return (
        <section id="projects" className="project-section">
            <div className="main-text">
                <h2>Latest <span>Projects</span></h2>
            </div>

            <div className="projects-grid">
                {myProjectsData.map((project, index) => (
                    <div
                        className="project-card"
                        key={index}
                        onClick={() => openModal(project)}
                    >
                        <img src={project.image} alt={project.title} />
                        <h5>{project.title}</h5>
                    </div>
                ))}
            </div>

            {activeProject && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-btn" onClick={closeModal}>×</button>
                        <img src={activeProject.image} alt={activeProject.title} />
                        <h3>{activeProject.title}</h3>
                        <p>{activeProject.description}</p>
                        <a href={activeProject.link} target="_blank" rel="noreferrer">
                            <i className="bx bxl-github"></i> View on GitHub
                        </a>
                    </div>
                </div>
            )}
        </section>
    );
}
