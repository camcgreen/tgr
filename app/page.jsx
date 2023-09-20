import styles from './page.module.scss';
import Header from './components/header.jsx';
import Landing from './components/landing.jsx';
import Loading from './components/loading';
import About from './components/about';

export default function Home() {
    return (
        <div className='wrapper'>
            <Header />
            <Landing />
            <About />
            {/* <Loading /> */}
        </div>
    );
}
