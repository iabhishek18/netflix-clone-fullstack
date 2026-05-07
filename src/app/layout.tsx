import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'Netflix Clone',
  description: 'Full-stack Netflix clone with Next.js 14',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#141414] text-white min-h-screen">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
