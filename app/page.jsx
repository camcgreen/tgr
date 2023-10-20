'use client'

import { useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollSmoother } from 'gsap/dist/ScrollSmoother'
import styles from './page.module.scss'
import Loading from './components/loading'
import Header from './components/header.jsx'
import Landing from './components/landing.jsx'
import About from './components/about'
import Services from './components/services'
import Contact from './components/contact'
import Footer from './components/footer'

gsap.registerPlugin(ScrollSmoother)

export default function Home() {
  const [smoother, setSmoother] = useState(null)
  useEffect(() => {
    const smootherInstance = ScrollSmoother.create({
      wrapper: '.smooth-wrapper',
      content: '.smooth-content',
      smooth: 0.75,
      effects: true,
      preventDefault: true,
    })
    setSmoother(smootherInstance)
  }, [])
  return (
    <div className='wrapper'>
      <Header smoother={smoother} />
      <Landing smoother={smoother} />
      <About smoother={smoother} />
      <Services />
      <Contact />
      <Footer />
    </div>
  )
}
