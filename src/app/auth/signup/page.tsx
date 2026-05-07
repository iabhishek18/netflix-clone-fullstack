'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function SignupPage() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [plan, setPlan] = useState('standard');

  const plans = [
    { id: 'basic', name: 'Basic', price: '₹149', features: ['720p', '1 Device', 'Mobile only'] },
    { id: 'standard', name: 'Standard', price: '₹499', features: ['1080p', '2 Devices', 'TV + Mobile'] },
    { id: 'premium', name: 'Premium', price: '₹649', features: ['4K + HDR', '4 Devices', 'All screens'] },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !password) return;
    localStorage.setItem('netflix-user', name);
    localStorage.setItem('netflix-plan', plan);
    router.push('/browse');
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-lg bg-black/90 border border-gray-800 rounded-lg p-8">
        <h1 className="text-3xl font-bold text-white mb-2">Create Account</h1>
        <p className="text-gray-400 mb-8">Choose your plan and start watching today.</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} className="w-full px-4 py-3 bg-[#333] rounded text-white placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-red-500" required />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-3 bg-[#333] rounded text-white placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-red-500" required />
          <input type="password" placeholder="Password (min 6 chars)" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-4 py-3 bg-[#333] rounded text-white placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-red-500" minLength={6} required />

          <div className="pt-4">
            <p className="text-white font-semibold mb-3">Choose your plan:</p>
            <div className="grid grid-cols-3 gap-3">
              {plans.map((p) => (
                <button key={p.id} type="button" onClick={() => setPlan(p.id)} className={`p-4 rounded-lg border text-center transition ${plan === p.id ? 'border-red-500 bg-red-500/10' : 'border-gray-700 hover:border-gray-500'}`}>
                  <div className="font-bold text-white text-sm">{p.name}</div>
                  <div className="text-red-400 font-bold text-lg mt-1">{p.price}</div>
                  <div className="text-xs text-gray-400 mt-2 space-y-0.5">{p.features.map((f) => <div key={f}>{f}</div>)}</div>
                </button>
              ))}
            </div>
          </div>

          <button type="submit" className="w-full bg-red-600 text-white py-3 rounded font-semibold hover:bg-red-700 transition mt-6">Start Membership</button>
        </form>
        <div className="mt-4 text-gray-400 text-sm text-center">
          Already have an account? <Link href="/auth/login" className="text-white hover:underline">Sign in.</Link>
        </div>
      </div>
    </div>
  );
}
