'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollSmoother } from 'gsap/dist/ScrollSmoother';
import styles from './page.module.scss';
import Loading from './components/loading';
import Header from './components/header.jsx';
import Landing from './components/landing.jsx';
import About from './components/about';
import Services from './components/services';
import Contact from './components/contact';
import Footer from './components/footer';

gsap.registerPlugin(ScrollSmoother);

export default function Home() {
    useEffect(() => {
        // let scrollY = 0;
        const smoother = ScrollSmoother.create({
            wrapper: '.smooth-wrapper',
            content: '.smooth-content',
            smooth: 0.75,
            // smooth: 1,
            // normalizeScroll: true, // prevents address bar from showing/hiding on most devices, solves various other browser inconsistencies
            // ignoreMobileResize: true, // skips ScrollTrigger.refresh() on mobile resizes from address bar showing/hiding
            effects: true,
            preventDefault: true,
            // onUpdate: (self) => {
            //     scrollY = self.scrollTop();
            // },
        });
    }, []);
    return (
        <div className='wrapper'>
            <Header />
            <Landing />
            <About />
            <Services />
            <Contact />
            <Footer />
            {/* <Loading /> */}
        </div>
    );
}
