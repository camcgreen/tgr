'use client';

import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { SplitText } from 'gsap/dist/SplitText';
gsap.registerPlugin(ScrollTrigger, SplitText);

const Landing = () => {
    useEffect(() => {
        console.log(SplitText);
    }, []);
    return (
        <section className='landing'>
            <img
                src='/images/landing-bg.jpg'
                alt='Landing background'
                className='landing__bg'
            />
            <div className='landing__text'>
                <h1 className='landing__text__tagline'>
                    Discover your inner strength
                    <br className='break' />
                    <span className='space'> </span>and create a life you love.
                </h1>
                <h2 className='landing__text__subtitle'>
                    Life coaching guides you through a transformational journey
                    of
                    <br className='break' />
                    <span className='space'> </span>discovery, helping you
                    identify your unique gifts and talents.
                </h2>
            </div>
        </section>
    );
};

export default Landing;
