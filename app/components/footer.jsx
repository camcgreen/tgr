import React from 'react';

const Footer = () => {
    return (
        <div className='card footer'>
            <p>© 2023 by The Green Room Coaching</p>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
            <div className='footer__social'>
                <img src='/images/linkedin.svg' alt='LinkedIn' />
                <img src='/images/facebook.svg' alt='Facebook' />
                <img src='/images/instagram.svg' alt='Instagram' />
            </div>
        </div>
    );
};

export default Footer;
