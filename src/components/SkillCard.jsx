import React from "react";

export default function SkillCard({ iconClass, color, title, description }) {
    return (
        <div className="skill-card">
            <i className={iconClass} style={{ color }}></i>
            <h2>{title}</h2>
            <p dangerouslySetInnerHTML={{ __html: description }} />
        </div>
    );
}
