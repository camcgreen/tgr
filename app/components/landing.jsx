"use client";

import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { SplitText } from "gsap/dist/SplitText";
gsap.registerPlugin(ScrollTrigger, SplitText);

const Landing = ({ smoother }) => {
    return (
        <section className="landing">
            <img
                src="/images/landing-bg.jpg"
                alt="Landing background"
                className="landing__bg"
            />
            <div className="landing__text">
                <h1 className="landing__text__tagline">
                    Unlock your inner strength
                    <br className="break" />
                    <span className="space"> </span>and create a life you love.
                </h1>
                <h4 className="landing__text__subtitle">
                    Life coaching guides you through a transformational journey
                    of
                    <br className="break" />
                    <span className="space"> </span>discovery, helping you
                    identify your unique gifts and talents.
                </h4>
                {/* <h4 className="landing__text__subtitle">
                    Everything you have ever read, everything you have listened
                    to, all the advice you’ve ever received has left something
                    with you.
                    <span className="space"> </span> We will help you unlock
                    that resource align it with your values and what motivates
                    you and allow you to bring it into action.
                </h4> */}
            </div>
            <div
                className="landing__scroll"
                onClick={() => smoother && smoother.scrollTo("#about", true)}
            >
                <div className="landing__scroll__circle" />
            </div>
        </section>
    );
};

export default Landing;
