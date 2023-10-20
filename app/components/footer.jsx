import React from 'react'

const Footer = () => {
  return (
    <div className='card footer'>
      <p>© 2023 by The Green Room Coaching</p>
      <div className='footer__social'>
        <a
          href='https://linkedin.com/in/scott-green-aa3b8419'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src='/images/linkedin.svg' alt='LinkedIn' />
        </a>
        {/* <img src='/images/facebook.svg' alt='Facebook' />
        <img src='/images/instagram.svg' alt='Instagram' /> */}
      </div>
    </div>
  )
}

export default Footer
