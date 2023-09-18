import styles from './page.module.scss';
import Header from './components/header.jsx';
import Landing from './components/landing.jsx';

export default function Home() {
    return (
        <div className='wrapper'>
            <Header />
            <Landing />
        </div>
    );
}
