import React from 'react';
import { professionalSkillsData } from '../data/professionalSkillsData';
import '../assets/css/components/professionalskills.css';

export default function ProfessionalSkills() {
    return (
        <section className="professional-skills" id="professional-skills">
            <h2 className="sub-title">Professional <span>Skills</span></h2>
            <div className="professional-container">
                {professionalSkillsData.map((skill, index) => (
                    <div className="professional-card" key={index}>
                        <i className={skill.icon} style={{ color: skill.color }}></i>
                        <h3>{skill.title}</h3>
                        <p>{skill.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
