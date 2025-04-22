import { Roboto } from 'next/font/google';
import localFont from 'next/font/local';
import type { Metadata } from 'next';
import ClientLayout from './app'; 

import './globals.css';

const geistSans = localFont({
  src: './_fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});

const geistMono = localFont({
  src: './_fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

const roboto = Roboto({ 
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Welcome to my dev space',
  description: 'Want to build your next app? Let\'s get started',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${roboto.className}`}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
