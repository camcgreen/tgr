'use client';

import React from 'react';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);
    };
    const addWobble = (e) => {
        const target = e.target;
        const parent = target.parentElement;
        const line = parent.children[1];
        line.classList.add('contact__form__item__line__animated');
        setTimeout(() => {
            line.classList.remove('contact__form__item__line__animated');
        }, 1100);
    };
    const dynamicHeight = (e) => {
        // console.log(e.target);
        const target = e.target;
        target.style.height = '5px';
        target.style.height = target.scrollHeight + 'px';
    };
    return (
        <div className='card contact' id='contact'>
            <h2>
                Let&apos;s get the
                <br />
                conversation started.
            </h2>
            <p>
                Want to achieve real results? Fill in the form
                <br className='break' />
                <span className='space'> </span>
                below to schedule your first <span className=''>free</span>{' '}
                session.
            </p>
            <form onSubmit={(e) => handleSubmit(e)} className='contact__form'>
                <div className='contact__form__item'>
                    <input
                        type='text'
                        placeholder='Name'
                        className='contact__form__item__input'
                        onFocus={(e) => addWobble(e)}
                    />
                    <div className='contact__form__item__line' />
                </div>
                <div className='contact__form__item'>
                    <input
                        type='email'
                        placeholder='Email'
                        className='contact__form__item__input'
                        onFocus={(e) => addWobble(e)}
                    />
                    <div className='contact__form__item__line' />
                </div>
                <div className='contact__form__item'>
                    <input
                        type='phone'
                        placeholder='Phone'
                        className='contact__form__item__input'
                        onFocus={(e) => addWobble(e)}
                    />
                    <div className='contact__form__item__line' />
                </div>
                <div className='contact__form__item contact__form__textareaitem'>
                    <textarea
                        type='text'
                        placeholder='Message'
                        // className='contact__form__item__input contact__form__item__textarea'
                        className='contact__form__item__textarea'
                        onFocus={(e) => addWobble(e)}
                        onChange={(e) => dynamicHeight(e)}
                    />
                    <div className='contact__form__item__line' />
                </div>
                <input type='submit' value='Send' className='submit button' />
            </form>
        </div>
    );
};

export default Contact;
