import React from 'react'

const Header = ({ smoother }) => {
  return (
    <header className='header'>
      <div className='header__logo-container'>
        <img
          src='/images/logo-full.svg'
          alt='The Green Room Coaching logo'
          className='header__logo'
        />
      </div>
      <ul className='header__links'>
        <li style={{ fontWeight: 700 }}>Home</li>
        <li onClick={() => smoother && smoother.scrollTo('#about', true)}>
          About
        </li>
        <li onClick={() => smoother && smoother.scrollTo('#services', true)}>
          Services
        </li>
        <li onClick={() => smoother && smoother.scrollTo('#contact', true)}>
          Contact
        </li>
      </ul>
      <div className='header__btn-container'>
        <button
          className='button'
          onClick={() => smoother && smoother.scrollTo('#contact', true)}
        >
          Book Session
        </button>
      </div>
    </header>
  )
}

export default Header
