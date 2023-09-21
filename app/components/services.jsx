import React from 'react';

const Services = () => {
    return (
        <div className='card services' id='services'>
            <div className='services__left'>
                <h2>
                    In the room
                    <br />
                    with you.
                </h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    et massa mi. Aliquam in hendrerit urna. Pellentesque sit
                    amet sapien fringilla, mattis ligula consectetur, ultrices
                    mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet
                    augue.{' '}
                </p>
                <p>
                    Vestibulum auctor ornare leo, non suscipit magna interdum
                    eu. Curabitur pellentesque nibh nibh, at maximus ante
                    fermentum sit amet. Pellentesque commodo lacus at sodales
                    sodales. Quisque sagittis orci ut diam condimentum, vel
                    euismod erat placerat. In iaculis arcu eros, eget tempus
                    orci facilisis id.
                </p>
            </div>
            <img src='/images/chair.jpg' alt='In the room with you.' />
        </div>
    );
};

export default Services;
