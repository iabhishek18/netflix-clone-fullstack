'use client';

import Link from 'next/link';
import { movies, getGenres, getMoviesByGenre } from '@/lib/movies';
import { useState, useEffect } from 'react';

export default function BrowsePage() {
  const [featured] = useState(movies[Math.floor(Math.random() * movies.length)]);
  const [myList, setMyList] = useState<string[]>([]);
  const genres = getGenres();

  useEffect(() => {
    const saved = localStorage.getItem('netflix-mylist');
    if (saved) setMyList(JSON.parse(saved));
  }, []);

  const toggleMyList = (id: string) => {
    const updated = myList.includes(id) ? myList.filter((i) => i !== id) : [...myList, id];
    setMyList(updated);
    localStorage.setItem('netflix-mylist', JSON.stringify(updated));
  };

  return (
    <div className="min-h-screen bg-[#141414]">
      <section className="relative h-[80vh] flex items-end pb-20 px-6 md:px-12">
        <img src={featured.backdropUrl} alt={featured.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent" />
        <div className="relative z-10 max-w-xl">
          <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg">{featured.title}</h1>
          <p className="text-gray-200 mt-4 text-base md:text-lg line-clamp-3">{featured.description}</p>
          <div className="flex gap-3 mt-6">
            <Link href={`/movie/${featured.id}`} className="flex items-center gap-2 bg-white text-black px-6 py-2.5 rounded font-semibold hover:bg-gray-200 transition">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"/></svg>
              Play
            </Link>
            <button onClick={() => toggleMyList(featured.id)} className="flex items-center gap-2 bg-gray-500/60 text-white px-6 py-2.5 rounded font-semibold hover:bg-gray-500/40 transition backdrop-blur-sm">
              {myList.includes(featured.id) ? '✓ In My List' : '+ My List'}
            </button>
          </div>
          <div className="flex gap-3 mt-3 text-sm text-gray-300">
            <span className="text-green-400 font-semibold">98% Match</span>
            <span>{featured.year}</span>
            <span className="border border-gray-500 px-1.5 text-xs leading-5">{featured.rating}</span>
            <span>{featured.duration}</span>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 -mt-12 relative z-20 space-y-10 pb-20">
        {genres.map((genre) => (
          <div key={genre}>
            <h2 className="text-xl font-semibold text-white mb-3">{genre}</h2>
            <div className="flex gap-2 overflow-x-auto pb-4">
              {getMoviesByGenre(genre).map((movie) => (
                <Link key={movie.id} href={`/movie/${movie.id}`} className="flex-shrink-0 w-[200px] md:w-[240px] group relative rounded overflow-hidden hover:scale-105 hover:z-10 transition-transform duration-300">
                  <img src={movie.thumbnailUrl} alt={movie.title} className="w-full h-[130px] object-cover rounded" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                    <div>
                      <p className="text-white text-sm font-semibold truncate">{movie.title}</p>
                      <p className="text-gray-300 text-xs">{movie.year} • {movie.duration}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
