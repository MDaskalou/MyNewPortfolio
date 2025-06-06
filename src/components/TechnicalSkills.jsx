import React from "react";
import { skillsData } from '../data/skillsData';
import "../assets/css/components/technicalskills.css";

export default function TechnicalSkills() {
    return (
        <section className="skills" id="skills">
            <h2 className="sub-title">
                My Technical <span>Skills</span>
            </h2>
            <div className="skills-list">
                {skillsData.map((skill, index) => (
                    <div key={index} className="skill-card">
                        <i className={skill.icon} style={{ color: skill.color }}></i>
                        <h3>{skill.title}</h3>
                        <p>{skill.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
