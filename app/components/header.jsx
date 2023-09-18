import React from 'react';
import Link from 'next/link';

const Header = () => {
    return (
        <header className='header'>
            <img
                src='/images/logo.svg'
                alt='The Green Room Coaching logo'
                className='header__logo'
            />
            <ul className='header__links'>
                <li>
                    <Link href='/#home'>
                        <span style={{ fontWeight: 700 }}>Home</span>
                    </Link>
                </li>
                <li>
                    <Link href='/#about'>About</Link>
                </li>
                <li>
                    <Link href='/#services'>Services</Link>
                </li>
                <li>
                    <Link href='/#contact'>Contact</Link>
                </li>
            </ul>
            <button className='button'>Book Session</button>
        </header>
    );
};

export default Header;
