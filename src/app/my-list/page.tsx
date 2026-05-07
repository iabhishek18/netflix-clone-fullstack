'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { getMovieById, Movie } from '@/lib/movies';

export default function MyListPage() {
  const [listMovies, setListMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const saved: string[] = JSON.parse(localStorage.getItem('netflix-mylist') || '[]');
    const foundMovies = saved.map(getMovieById).filter(Boolean) as Movie[];
    setListMovies(foundMovies);
  }, []);

  const removeFromList = (id: string) => {
    const saved: string[] = JSON.parse(localStorage.getItem('netflix-mylist') || '[]');
    const updated = saved.filter((i) => i !== id);
    localStorage.setItem('netflix-mylist', JSON.stringify(updated));
    setListMovies(listMovies.filter((m) => m.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#141414] pt-20 px-6 md:px-12">
      <h1 className="text-3xl font-bold mb-8">My List</h1>

      {listMovies.length === 0 ? (
        <div className="text-center py-32">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-gray-600 mx-auto mb-4"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15"/></svg>
          <h2 className="text-xl text-gray-300 font-semibold">Your list is empty</h2>
          <p className="text-gray-500 mt-2">Add movies and shows to your list to watch later.</p>
          <Link href="/browse" className="inline-block mt-6 bg-white text-black px-6 py-2 rounded font-semibold hover:bg-gray-200 transition">Browse Content</Link>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {listMovies.map((movie) => (
            <div key={movie.id} className="group relative rounded overflow-hidden">
              <Link href={`/movie/${movie.id}`}>
                <img src={movie.thumbnailUrl} alt={movie.title} className="w-full h-32 object-cover group-hover:brightness-110 transition" />
                <div className="bg-[#1a1a1a] p-3">
                  <p className="text-sm font-semibold truncate">{movie.title}</p>
                  <p className="text-xs text-gray-400 mt-1">{movie.year} • {movie.genre}</p>
                </div>
              </Link>
              <button
                onClick={() => removeFromList(movie.id)}
                className="absolute top-2 right-2 bg-black/70 backdrop-blur-sm text-red-400 p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition hover:bg-red-500 hover:text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12"/></svg>
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
