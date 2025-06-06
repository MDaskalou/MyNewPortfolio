import React from 'react';
import "../assets/css/components/hero.css";
import "../assets/css/utils/buttons.css";
import mikael1 from "../assets/public/img/mikael1.png";
import { Typewriter } from 'react-simple-typewriter';

export default function Hero() {
    return (
        <section className="home" id="home">
            <div className="home-content">
                <h3>Welcome to My Portfolio</h3>
                <h1>I'm Mikael</h1>
                <h3>
                    And I'm a{' '}
                    <span className="text">
                        <Typewriter
                            words={['Backend Developer', 'Frontend Developer', 'Fullstack Developer', 'Dancer']}
                            loop={true}
                            cursor
                            cursorStyle="_"
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1500}
                        />
                    </span>
                </h3>
                <p>
                    An ambitious student learning to become a Fullstack Developer. The website that you see right now
                    is my first website ever built. During my studies I have learned both the backend C# .NET and the
                    frontend HTML, CSS, and JavaScript. My goal is to become a Fullstack Developer and work on exciting
                    projects that make a difference.
                </p>

                <div className="profile-img">
                    <img src={mikael1} alt="profile" />
                </div>

                <div className="home-sci">
                    <a href="https://facebook.com"><i className="bx bxl-facebook-circle"></i></a>
                    <a href="https://instagram.com"><i className="bx bxl-instagram-alt"></i></a>
                    <a href="https://linkedin.com/in/mikael-daskalou-46b424184"><i className="bx bxl-linkedin"></i></a>
                    <a href="https://github.com/MDaskalou"><i className="bx bxl-github"></i></a>
                    <a href="#"><i className="bx bxl-whatsapp"></i></a>
                </div>

                <a href="#about" className="btn btn--primary">More About Me</a>
            </div>
        </section>
    )
}
