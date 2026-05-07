'use client';

import { useState } from 'react';
import Link from 'next/link';
import { searchMovies } from '@/lib/movies';

export default function SearchPage() {
  const [query, setQuery] = useState('');
  const results = query.length >= 2 ? searchMovies(query) : [];

  return (
    <div className="min-h-screen bg-[#141414] pt-20 px-6 md:px-12">
      <div className="max-w-2xl mx-auto mb-10">
        <input
          type="text"
          autoFocus
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search movies, genres, actors..."
          className="w-full px-5 py-4 bg-[#333] rounded-lg text-white text-lg placeholder:text-gray-500 outline-none focus:ring-2 focus:ring-red-500"
        />
      </div>

      {query.length >= 2 && results.length === 0 && (
        <div className="text-center py-20">
          <p className="text-gray-400 text-lg">No results for &quot;{query}&quot;</p>
          <p className="text-gray-500 text-sm mt-2">Try different keywords or browse genres.</p>
        </div>
      )}

      {results.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {results.map((movie) => (
            <Link key={movie.id} href={`/movie/${movie.id}`} className="group rounded overflow-hidden hover:ring-2 hover:ring-white/20 transition">
              <img src={movie.thumbnailUrl} alt={movie.title} className="w-full h-32 object-cover group-hover:brightness-110 transition" />
              <div className="bg-[#1a1a1a] p-3">
                <p className="text-sm font-semibold truncate">{movie.title}</p>
                <p className="text-xs text-gray-400 mt-1">{movie.year} • {movie.genre}</p>
              </div>
            </Link>
          ))}
        </div>
      )}

      {query.length < 2 && (
        <div className="text-center py-20">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-gray-600 mx-auto mb-4"><path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"/></svg>
          <p className="text-gray-400 text-lg">Type to search for movies</p>
          <p className="text-gray-500 text-sm mt-1">Search by title, genre, or actor name</p>
        </div>
      )}
    </div>
  );
}
