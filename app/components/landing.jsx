'use client'

import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { SplitText } from 'gsap/dist/SplitText'
gsap.registerPlugin(ScrollTrigger, SplitText)

const Landing = ({ smoother }) => {
  return (
    <section className='landing'>
      <img
        src='/images/landing-bg.jpg'
        alt='Landing background'
        className='landing__bg'
      />
      <div className='landing__text'>
        <h1 className='landing__text__tagline'>
          Discover your inner strength
          <br className='break' />
          <span className='space'> </span>and create a life you love.
        </h1>
        <h4 className='landing__text__subtitle'>
          Life coaching guides you through a transformational journey of
          <br className='break' />
          <span className='space'> </span>discovery, helping you identify your
          unique gifts and talents.
        </h4>
        {/* <h1>
          Unlock your inner strength
          <br className='break' />
          <span className='space'> </span>and transform your life into the life
          you seek.
        </h1> */}
        {/* <h4 className='landing__text__subtitle'>
          Life and Performance coaching puts you through a transformative
          journey that
          <br className='break' />
          <span className='space'> </span>unlocks your inner resources and puts
          you in touch with your true identity and your unique gifts and
          talents.
        </h4> */}
      </div>
      <div
        className='landing__scroll'
        onClick={() => smoother && smoother.scrollTo('#about', true)}
      >
        <div className='landing__scroll__circle' />
      </div>
    </section>
  )
}

export default Landing
