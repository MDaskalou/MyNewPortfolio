import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../assets/css/components/contact.css";

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_ij2za0c',      // <- din SERVICE ID
            'template_ez9y4kv',     // <- din TEMPLATE ID
            form.current,
            'd5xXbjorq_2LdwFgg'      // <- din PUBLIC KEY
        ).then(
            () => {
                alert("Message sent successfully!");
                form.current.reset();
            },
            (error) => {
                alert("Failed to send message, try again later.");
                console.error(error);
            }
        );
    };

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
            </div>

            <div className="contact-form">
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="user_name" placeholder="Enter Your Name" required />
                    <input type="email" name="user_email" placeholder="Enter Your Email" required />
                    <input type="text" name="subject" placeholder="Enter Your Subject" required />
                    <textarea name="message" rows="6" placeholder="Enter Your Message" required></textarea>
                    <input type="submit" value="Send Message" className="send" />
                </form>
            </div>
        </section>
    );
}
