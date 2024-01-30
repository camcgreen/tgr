import React from "react";

const About = ({ smoother }) => {
    return (
        <div className="card about" id="about">
            <div className="about__left">
                <h2 className="about__left__title">How coaching works.</h2>
                <p className="about__left__description">
                    {/* Coaching is a structured conversation with yourself where you
          externalise and challenge your inner voice or your inner images of
          yourself */}
                    Coaching is a one to one structured and externalised
                    conversation with yourself. We give you the structure and
                    you set the agenda. Together we externalise and challenge
                    your inner voice, or your images of yourself. We examine
                    that together before you make your plan to create your
                    change.
                </p>
                <p className="about__left__description">
                    {/* When engaged with fully it can be truly transformative -
                    better than any advice you will ever receive, better than
                    anything you will ever read or hear. Coaching unlocks
                    everything you have ever put into your emotional and
                    intelligence store and gives you back a sense of confidence
                    in knowing that you have an answer to any and every
                    challenge that life can ever present you with. */}
                    Coaching isn’t counselling, it is not advice, it isn’t a
                    consultation and most importantly it’s aim is independence
                    of action. Please be careful out there because there are
                    those who will use this unregulated space to take advantage
                    of you. Always choose a trained, experienced and qualified
                    professional. If you remember only one thing in regard to
                    coaching, it is that coaching will never create a
                    relationship of dependency. Coaching fosters independence of
                    thought and action and leads to an outcome entirely of your
                    choosing. Want to learn more? Please check the following
                    links:{" "}
                    <a
                        href=" https://www.acconnect.org/home"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: "underline" }}
                    >
                        {" "}
                        acconnect.org
                    </a>{" "}
                    and{" "}
                    <a
                        href="https://www.the-coaching-academy.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: "underline" }}
                    >
                        the-coaching-academy.com
                    </a>
                </p>
                <div
                    className="about__left__book"
                    onClick={() =>
                        smoother && smoother.scrollTo("#contact", true)
                    }
                >
                    <p>Book your first free session now.</p>
                    <img
                        style={{ display: "inline" }}
                        src="/images/arrow-right.svg"
                        alt="Book your first free session now"
                    />
                </div>
                <p></p>
            </div>
            <div className="about__right">
                <div className="about__right__row">
                    <img
                        src="/images/time.svg"
                        alt="Proven to see faster changes"
                        className="about__right__row__time"
                    />
                    <div className="about__right__column">
                        <h3>Proven to help you see changes faster.</h3>
                        <p>
                            Coaching facilitates and unlocks all the mental
                            preparation you have unconsciously already
                            undertaken. Its power for personal transformation
                            can be therapeutic, although itself it is not
                            therapy and shouldn’t be confused with therapy.
                        </p>
                    </div>
                </div>
                <div className="about__right__row">
                    <img
                        src="/images/secure.svg"
                        alt="Complete confidentiality"
                    />
                    <div className="about__right__column">
                        <h3>Complete confidentiality.</h3>
                        <p>
                            You can feel safe in the knowledge that your
                            information will be treated in complete confidence
                            and held securely. At the Green Room Coaching
                            Practice we undertake to help you unlock your
                            transformative power the moment you undertake to
                            follow the path you unlock within yourself.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
