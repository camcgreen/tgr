import React from 'react';

const About = () => {
    return (
        <div className='card about' id='about'>
            <div className='about__left'>
                <h2 className='about__left__title'>How coaching works.</h2>
                <p className='about__left__description'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    et massa mi.
                </p>
                <div className='about__left__book'>
                    <p>Book your first free session now.</p>
                    <img
                        style={{ display: 'inline' }}
                        src='/images/arrow-right.svg'
                        alt='Book your first free session now'
                    />
                </div>
                <p></p>
            </div>
            <div className='about__right'>
                <div className='about__right__row'>
                    <img
                        src='/images/time.svg'
                        alt='Proven to see faster changes'
                        className='about__right__row__time'
                    />
                    <div className='about__right__column'>
                        <h3>Proven to help you see changes faster.</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Ut et massa mi. Aliquam in hendrerit urna.
                        </p>
                    </div>
                </div>
                <div className='about__right__row'>
                    <img
                        src='/images/secure.svg'
                        alt='Complete confidentiality'
                    />
                    <div className='about__right__column'>
                        <h3>Complete confidentiality.</h3>
                        <p>
                            Aliquam in hendrerit urna. Pellentesque sit amet
                            sapien fringilla, mattis ligula consectetur,
                            ultrices mauris.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
