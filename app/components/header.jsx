import React from 'react'

const Header = ({ smoother }) => {
  return (
    <header className='header'>
      <img
        src='/images/logo.svg'
        alt='The Green Room Coaching logo'
        className='header__logo'
      />
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
      <button
        className='button'
        onClick={() => smoother && smoother.scrollTo('#contact', true)}
      >
        Book Session
      </button>
    </header>
  )
}

export default Header
