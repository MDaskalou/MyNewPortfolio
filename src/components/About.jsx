import React from "react";
import "../assets/css/components/about.css";

export default function About() {
    return (
        <section className="about" id="about">
            <div className="container">
                <div className="about-wrapper">
                    <div className="about-img">
                        <img src={`${import.meta.env.BASE_URL}img/Mikael.png`} />
                    </div>
                    <article className="about-content">
                        <h2>About <span>Me</span></h2>
                        <h4>Full Stack Developer Student!</h4>
                        <p>
                            My name is Mikael, and I am a student at NBI/Handelsakademin in Gothenburg, Sweden, where I am
                            currently training to become a Fullstack Developer.
                            I have a strong passion for technology and a constant drive to learn and grow.
                            Throughout my studies, I have gained hands-on experience with technologies such as C#, SQL,
                            relational databases, and React. I also have a deep interest in writing clean, maintainable code and
                            following the principles of Clean Code and Clean Architecture.
                            In addition to development, I enjoy problem-solving and structuring
                            applications in a way that promotes scalability and testability.
                            When I'm not coding, I love dancing, watching movies, and spending quality time with friends and
                            family. I'm excited about the journey ahead and look forward to contributing to meaningful projects
                            that make a real impact.
                        </p>
                    </article>
                </div>
            </div>
        </section>
    );
}
