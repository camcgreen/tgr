import React from "react";

const Footer = () => {
    return (
        <div className="card footer">
            <p>© 2023 by The Green Room Coaching</p>
            <p style={{ fontWeight: 300 }}>
                Book an appointment on{" "}
                <a
                    href="https://calendly.com/the_greenroom/the-green-room-coaching-practice"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ marginBottom: 20, fontWeight: 400 }}
                >
                    Calendly
                </a>
            </p>

            <div className="footer__social">
                <a
                    href="https://linkedin.com/in/scott-green-aa3b8419"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src="/images/linkedin.svg" alt="LinkedIn" />
                </a>
                <a
                    href="https://linkedin.com/in/scott-green-aa3b8419"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src="/images/facebook.svg" alt="Facebook" />
                </a>
                <a
                    href="https://linkedin.com/in/scott-green-aa3b8419"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src="/images/instagram.svg" alt="Instagram" />
                </a>
            </div>
        </div>
    );
};

export default Footer;
