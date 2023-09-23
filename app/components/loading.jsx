'use client';

import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';

const Loading = () => {
    return (
        <div className='loading'>
            <img
                src='/images/logo.svg'
                alt=''
                className='loading__logo__dark'
            />
            <img
                src='/images/logo-white.svg'
                alt=''
                className='loading__logo__light'
            />
        </div>
    );
};

export default Loading;
