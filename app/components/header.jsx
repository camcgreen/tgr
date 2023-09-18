import React from 'react';
import Link from 'next/link';

const Header = () => {
    return (
        <header>
            <ul>
                <li>
                    <Link href='/#home'>Home</Link>
                    <Link href='/#about'>About</Link>
                    <Link href='/#services'>Services</Link>
                    <Link href='/#contact'>Contact</Link>
                </li>
            </ul>
        </header>
    );
};

export default Header;
