import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';

// Styles
import '../styles/globals.css';

const inter = Outfit({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Entertainment Web App',
    description: '',
    icons: {
        icon: '/assets/logo.svg',
    },
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
        <body className={ inter.className }>{ children }</body>
        </html>
    );
}
