import styles from './page.module.scss';
import Landing from './components/landing.jsx';

export default function Home() {
    return (
        <main className='container'>
            <section className='container__section'>
                <Landing />
            </section>
        </main>
    );
}
