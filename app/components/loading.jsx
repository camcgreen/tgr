'use client';

import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/dist/SplitText';
gsap.registerPlugin(SplitText);

const Loading = () => {
    const [progress, setProgress] = useState(0);
    const updateProgress = (prev) => {

    }
    const calculateNumber = () => {
        
    }
    return (
        <div className='loading'>
            <p className='loading__number'>084</p>
            <div className='loading__bar' />
        </div>
    );
};

export default Loading;
