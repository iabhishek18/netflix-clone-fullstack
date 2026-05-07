'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState<string | null>(null);

  useEffect(() => {
    setUser(localStorage.getItem('netflix-user'));
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (pathname === '/' || pathname?.startsWith('/auth')) return null;

  const handleLogout = () => {
    localStorage.removeItem('netflix-user');
    window.location.href = '/';
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12 py-4 flex items-center justify-between ${scrolled ? 'bg-black' : 'bg-gradient-to-b from-black/80 to-transparent'}`}>
      <div className="flex items-center gap-8">
        <Link href="/browse" className="text-red-600 text-2xl font-extrabold">NETFLIX</Link>
        <div className="hidden md:flex items-center gap-5 text-sm">
          <Link href="/browse" className={`hover:text-gray-300 transition ${pathname === '/browse' ? 'text-white font-semibold' : 'text-gray-400'}`}>Home</Link>
          <Link href="/search" className={`hover:text-gray-300 transition ${pathname === '/search' ? 'text-white font-semibold' : 'text-gray-400'}`}>Search</Link>
          <Link href="/my-list" className={`hover:text-gray-300 transition ${pathname === '/my-list' ? 'text-white font-semibold' : 'text-gray-400'}`}>My List</Link>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-300 hidden sm:block">{user || 'Guest'}</span>
        <button onClick={handleLogout} className="text-sm text-gray-400 hover:text-white transition">Sign Out</button>
      </div>
    </nav>
  );
}
