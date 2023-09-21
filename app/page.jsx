import styles from './page.module.scss';
import Loading from './components/loading';
import Header from './components/header.jsx';
import Landing from './components/landing.jsx';
import About from './components/about';
import Services from './components/services';
import Contact from './components/contact';
import Footer from './components/footer';

export default function Home() {
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
