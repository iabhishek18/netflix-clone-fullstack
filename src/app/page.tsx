import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="relative min-h-screen bg-black">
      <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
      <nav className="relative z-10 flex items-center justify-between px-12 py-6">
        <h1 className="text-red-600 text-4xl font-bold">NETFLIX</h1>
        <Link href="/auth/login" className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
          Sign In
        </Link>
      </nav>
      <main className="relative z-10 flex flex-col items-center justify-center text-center px-4 pt-32">
        <h2 className="text-5xl font-bold text-white max-w-3xl">
          Unlimited movies, TV shows, and more
        </h2>
        <p className="text-xl text-gray-300 mt-4">Starts at ₹149. Cancel anytime.</p>
        <p className="text-lg text-gray-400 mt-6">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="flex gap-2 mt-4 w-full max-w-lg">
          <input
            type="email"
            placeholder="Email address"
            className="flex-1 px-4 py-3 bg-black/60 border border-gray-500 rounded text-white placeholder:text-gray-400 focus:outline-none focus:border-white"
          />
          <Link href="/auth/signup" className="bg-red-600 text-white px-8 py-3 rounded text-xl font-semibold hover:bg-red-700 whitespace-nowrap">
            Get Started &gt;
          </Link>
        </div>
      </main>
    </div>
  );
}
