'use client';

import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { getMovieById, getMoviesByGenre } from '@/lib/movies';
import { useState, useEffect } from 'react';

export default function MovieDetailPage() {
  const params = useParams();
  const router = useRouter();
  const movie = getMovieById(params.id as string);
  const [inList, setInList] = useState(false);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('netflix-mylist') || '[]');
    setInList(saved.includes(params.id));
  }, [params.id]);

  const toggleList = () => {
    const saved: string[] = JSON.parse(localStorage.getItem('netflix-mylist') || '[]');
    const updated = inList ? saved.filter((i) => i !== params.id) : [...saved, params.id as string];
    localStorage.setItem('netflix-mylist', JSON.stringify(updated));
    setInList(!inList);
  };

  if (!movie) return <div className="min-h-screen flex items-center justify-center"><p className="text-gray-400">Movie not found</p></div>;

  const similar = getMoviesByGenre(movie.genre).filter((m) => m.id !== movie.id);

  return (
    <div className="min-h-screen bg-[#141414]">
      <div className="relative h-[60vh]">
        <img src={movie.backdropUrl} alt={movie.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-black/50 to-black/30" />
        <button onClick={() => router.back()} className="absolute top-20 left-6 z-20 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full text-sm hover:bg-black/70 transition">← Back</button>
      </div>

      <div className="relative z-10 -mt-32 px-6 md:px-12 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-extrabold">{movie.title}</h1>
        <div className="flex items-center gap-4 mt-4 text-sm">
          <span className="text-green-400 font-semibold">97% Match</span>
          <span>{movie.year}</span>
          <span className="border border-gray-500 px-1.5 py-0.5">{movie.rating}</span>
          <span>{movie.duration}</span>
          <span className="bg-gray-700 px-2 py-0.5 rounded text-xs">{movie.genre}</span>
        </div>

        <div className="flex gap-3 mt-6">
          <button className="flex items-center gap-2 bg-white text-black px-8 py-3 rounded font-semibold hover:bg-gray-200 transition">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"/></svg>
            Play
          </button>
          <button onClick={toggleList} className="flex items-center gap-2 bg-gray-600/60 text-white px-6 py-3 rounded font-semibold hover:bg-gray-600/40 transition">
            {inList ? '✓ In My List' : '+ My List'}
          </button>
        </div>

        <p className="text-gray-200 mt-8 text-lg leading-relaxed">{movie.description}</p>

        <div className="mt-6 text-sm text-gray-400">
          <p><span className="text-gray-300">Cast:</span> {movie.cast.join(', ')}</p>
          <p className="mt-1"><span className="text-gray-300">Genre:</span> {movie.genre}</p>
        </div>
      </div>

      {similar.length > 0 && (
        <section className="px-6 md:px-12 mt-16 pb-20">
          <h2 className="text-xl font-semibold mb-4">More Like This</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {similar.map((m) => (
              <Link key={m.id} href={`/movie/${m.id}`} className="group rounded overflow-hidden hover:ring-2 hover:ring-white/30 transition">
                <img src={m.thumbnailUrl} alt={m.title} className="w-full h-32 object-cover" />
                <div className="bg-[#2f2f2f] p-3">
                  <p className="text-sm font-semibold truncate">{m.title}</p>
                  <p className="text-xs text-gray-400 mt-1">{m.year} • {m.duration}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
