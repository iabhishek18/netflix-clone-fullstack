import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <section className="relative h-screen flex flex-col">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black z-10" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1574375927938-d5a98e8d1302?w=1920&q=80')] bg-cover bg-center" />

        <nav className="relative z-20 flex items-center justify-between px-6 md:px-12 py-6">
          <h1 className="text-red-600 text-3xl md:text-4xl font-extrabold tracking-tight">NETFLIX</h1>
          <div className="flex items-center gap-4">
            <select className="bg-black/60 border border-gray-600 text-white text-sm rounded px-3 py-1.5">
              <option>English</option>
              <option>हिन्दी</option>
            </select>
            <Link href="/auth/login" className="bg-red-600 text-white px-4 py-1.5 rounded text-sm font-semibold hover:bg-red-700 transition">
              Sign In
            </Link>
          </div>
        </nav>

        <div className="relative z-20 flex-1 flex flex-col items-center justify-center text-center px-4 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            Unlimited movies, TV shows, and more
          </h2>
          <p className="text-lg md:text-2xl text-gray-200 mt-4">Starts at ₹149. Cancel anytime.</p>
          <p className="text-base md:text-lg text-gray-300 mt-6">
            Ready to watch? Enter your email to create or restart your membership.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 mt-5 w-full max-w-lg">
            <input
              type="email"
              placeholder="Email address"
              className="flex-1 px-4 py-3.5 bg-black/70 border border-gray-500 rounded text-white placeholder:text-gray-400 focus:outline-none focus:border-white focus:ring-1 focus:ring-white text-base"
            />
            <Link href="/auth/signup" className="bg-red-600 text-white px-8 py-3.5 rounded text-lg md:text-xl font-semibold hover:bg-red-700 transition flex items-center justify-center gap-2 whitespace-nowrap">
              Get Started
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path fillRule="evenodd" d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z" clipRule="evenodd" /></svg>
            </Link>
          </div>
        </div>
      </section>

      <div className="border-t-8 border-gray-800" />

      <section className="py-16 md:py-24 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-1">
            <h3 className="text-3xl md:text-5xl font-extrabold">Enjoy on your TV</h3>
            <p className="text-lg text-gray-400 mt-4">Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
          </div>
          <div className="flex-1 relative">
            <img src="https://images.unsplash.com/photo-1593784991095-a205069470b6?w=600&q=80" alt="TV" className="relative z-10" />
          </div>
        </div>
      </section>

      <div className="border-t-8 border-gray-800" />

      <section className="py-16 md:py-24 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12">
          <div className="flex-1">
            <h3 className="text-3xl md:text-5xl font-extrabold">Download your shows to watch offline</h3>
            <p className="text-lg text-gray-400 mt-4">Save your favorites easily and always have something to watch.</p>
          </div>
          <div className="flex-1">
            <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80" alt="Mobile" className="rounded-lg" />
          </div>
        </div>
      </section>

      <div className="border-t-8 border-gray-800" />

      <section className="py-16 md:py-24 px-6 md:px-12 max-w-6xl mx-auto">
        <h3 className="text-3xl md:text-5xl font-extrabold text-center mb-12">Frequently Asked Questions</h3>
        <div className="max-w-3xl mx-auto space-y-2">
          {[
            { q: 'What is Netflix?', a: 'Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.' },
            { q: 'How much does Netflix cost?', a: 'Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month.' },
            { q: 'Where can I watch?', a: 'Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device.' },
            { q: 'How do I cancel?', a: 'Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks.' },
          ].map((faq) => (
            <details key={faq.q} className="group bg-[#2d2d2d] hover:bg-[#3d3d3d] transition">
              <summary className="flex items-center justify-between p-5 text-lg md:text-xl font-medium cursor-pointer list-none">
                {faq.q}
                <svg className="w-8 h-8 text-white group-open:rotate-45 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.5v15m7.5-7.5h-15" /></svg>
              </summary>
              <p className="px-5 pb-5 text-gray-300 text-base">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      <footer className="border-t border-gray-800 py-12 px-6 md:px-12">
        <div className="max-w-6xl mx-auto text-gray-500 text-sm">
          <p>Questions? Call 000-800-919-1694</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
            {['FAQ', 'Help Centre', 'Account', 'Media Centre', 'Investor Relations', 'Jobs', 'Ways to Watch', 'Terms of Use', 'Privacy', 'Cookie Preferences', 'Corporate Information', 'Contact Us'].map((link) => (
              <a key={link} href="#" className="underline hover:text-gray-300 transition">{link}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
