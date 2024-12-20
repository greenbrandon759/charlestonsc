import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Analytics } from '@/components/Analytics';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Best Travel Destinations in Charleston SC - Complete 2024 Guide',
  description: 'Discover the top attractions, hidden gems, and local favorites in Charleston, SC. Your comprehensive guide to historic sites, beaches, restaurants, and more.',
  keywords: 'Charleston SC travel guide, best places to visit Charleston SC, Charleston tourist attractions, Charleston historic district, Charleston beaches',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}