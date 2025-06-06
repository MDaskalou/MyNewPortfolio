import React from "react";
import "../assets/css/components/contact.css";

export default function Contact() {
    return (
        <section className="contact" id="contact">
            <div className="contact-text">
                <h2>Contact <span>Me</span></h2>
                <h4>Let's Work Together</h4>
                <p>
                    If you have any questions or would like to discuss a potential project,
                    feel free to reach out. I'm always open to new opportunities and collaborations.
                </p>
                <ul className="contact-list">
                    <li><i className="bx bx-send"></i> mikael.dasklou@hotmail.com</li>
                    <li><i className="bx bx-phone"></i> 0739598665</li>
                </ul>
                <div className="contact-icons">
                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><i className="bx bxl-facebook-circle"></i></a>
                    <a href="https://www.instagram.com/mikael.bachata/" target="_blank" rel="noreferrer"><i className="bx bxl-instagram-alt"></i></a>
                    <a href="https://www.linkedin.com/in/mikael-daskalou-46b424184" target="_blank" rel="noreferrer"><i className="bx bxl-linkedin"></i></a>
                    <a href="https://github.com/MDaskalou" target="_blank" rel="noreferrer"><i className="bx bxl-github"></i></a>
                    <a href="#"><i className="bx bxl-whatsapp"></i></a>
                </div>
            </div>

            <div className="contact-form">
                <form action="https://formspree.io/f/xvgabbrn" method="POST">
                    <input type="text" name="name" placeholder="Enter Your Name" required />
                    <input type="email" name="email" placeholder="Enter Your Email" required />
                    <input type="text" name="subject" placeholder="Enter Your Subject" required />
                    <textarea name="message" rows="6" placeholder="Enter Your Message" required></textarea>
                    <input type="submit" value="Send Message" className="send" />
                </form>
            </div>
        </section>
    );
}
