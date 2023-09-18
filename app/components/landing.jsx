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
        <div>
            <h1>Landing</h1>
        </div>
    );
};

export default Landing;
