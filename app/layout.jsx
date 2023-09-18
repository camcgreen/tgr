import './globals.scss';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
    weight: ['200', '400', '500', '900'],
    subsets: ['latin'],
});

export const metadata = {
    title: 'The Green Room Coaching',
    description: 'Helping you to identify your unique skills and talents.',
    keywords: 'Coaching, transformation, professional, green room',
};

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body className={poppins.className}>
                <main className='container'>{children}</main>
            </body>
        </html>
    );
}
