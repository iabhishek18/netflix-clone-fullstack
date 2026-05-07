'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) { setError('Please fill in all fields'); return; }
    if (password.length < 4) { setError('Password must be at least 4 characters'); return; }
    localStorage.setItem('netflix-user', email.split('@')[0]);
    router.push('/browse');
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1574375927938-d5a98e8d1302?w=1920&q=80')] bg-cover opacity-30" />
      <div className="relative z-10 w-full max-w-md bg-black/75 rounded-md p-12">
        <h1 className="text-3xl font-bold text-white mb-8">Sign In</h1>
        {error && <div className="bg-orange-500/20 border border-orange-500 text-orange-300 p-3 rounded mb-4 text-sm">{error}</div>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="email" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-3.5 bg-[#333] rounded text-white placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-white" />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-4 py-3.5 bg-[#333] rounded text-white placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-white" />
          <button type="submit" className="w-full bg-red-600 text-white py-3 rounded font-semibold hover:bg-red-700 transition mt-6">Sign In</button>
        </form>
        <div className="mt-6 text-gray-400 text-sm">
          New to Netflix? <Link href="/auth/signup" className="text-white hover:underline">Sign up now.</Link>
        </div>
      </div>
    </div>
  );
}
