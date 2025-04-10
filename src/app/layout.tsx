import { Toaster } from '@/components/ui/toaster';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'PaniPath',
    description: 'PaniPath is a web application that provides information about water bodies in Delhi.',
    icons: {
        icon: '/favicon.ico',
    },
};

interface RootLayoutProps {
    children: React.ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${inter.className}`}>
                {children}
                <Toaster />
            </body>
        </html>
    );
}
