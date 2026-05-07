'use client';

import { useState } from 'react';
import { FaPlay, FaPlus, FaThumbsUp, FaChevronDown } from 'react-icons/fa';

interface MovieCardProps {
  id: string;
  title: string;
  thumbnailUrl: string;
  genre: string;
  duration: number;
  maturityRating: string;
}

export function MovieCard({ id, title, thumbnailUrl, genre, duration, maturityRating }: MovieCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const formatDuration = (mins: number) => {
    const hours = Math.floor(mins / 60);
    const minutes = mins % 60;
    return hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m`;
  };

  return (
    <div
      className="relative group cursor-pointer transition-transform duration-300 hover:scale-110 hover:z-50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={thumbnailUrl}
        alt={title}
        className="w-full h-[160px] object-cover rounded-md"
      />
      {isHovered && (
        <div className="absolute top-0 left-0 w-full bg-zinc-900 rounded-md shadow-2xl p-4 z-50">
          <img src={thumbnailUrl} alt={title} className="w-full h-[140px] object-cover rounded-t-md" />
          <div className="mt-3 space-y-2">
            <div className="flex items-center gap-2">
              <button className="bg-white rounded-full p-2 hover:bg-gray-200 transition">
                <FaPlay className="text-black text-sm" />
              </button>
              <button className="border border-gray-400 rounded-full p-2 hover:border-white transition">
                <FaPlus className="text-white text-sm" />
              </button>
              <button className="border border-gray-400 rounded-full p-2 hover:border-white transition">
                <FaThumbsUp className="text-white text-sm" />
              </button>
              <button className="ml-auto border border-gray-400 rounded-full p-2 hover:border-white transition">
                <FaChevronDown className="text-white text-sm" />
              </button>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <span className="text-green-400 font-semibold">98% Match</span>
              <span className="border border-gray-500 px-1">{maturityRating}</span>
              <span>{formatDuration(duration)}</span>
            </div>
            <p className="text-xs text-gray-400">{genre}</p>
          </div>
        </div>
      )}
    </div>
  );
}
