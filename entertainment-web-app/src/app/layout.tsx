// Community
import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import React from 'react';

// Styles
import '../styles/globals.css';

// Fonts
const inter = Outfit({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Entertainment Web App',
    description: 'Creates a web app for viewing and bookmarking TV/Movie titles.',
    icons: {
        icon: '/assets/logo.svg',
    },
    authors: {
        url: 'https://nomadmystic.com',
        name: 'Keith Murphy',
    },
    keywords: 'React.js Next.js Node.js Challenge',
    creator: 'Keith Murphy',
    publisher: 'Keith Murphy',
    abstract: 'Front-end mentor advanced challenge',
    openGraph: {
        type: 'website',
        url: 'https://entertainment-frontendmentor.vercel.app',
        title: 'Entertainment Web App',
        description: 'Front-end Mentor Entertainment Web App Advanced Challenge',
        siteName: 'Entertainment Web App',
        images: [{
            url: 'https://entertainment-frontendmentor.vercel.app/assets/open-graph-entertainment-web-app.png',
        }],
    }
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
        <body className={ inter.className }>{ children }</body>
        </html>
    );
}
