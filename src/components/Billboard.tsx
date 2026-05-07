'use client';

import { FaPlay, FaInfoCircle } from 'react-icons/fa';

interface BillboardProps {
  title: string;
  description: string;
  videoUrl: string;
  thumbnailUrl: string;
}

export function Billboard({ title, description, thumbnailUrl }: BillboardProps) {
  return (
    <div className="relative h-[80vh] w-full">
      <div className="absolute inset-0">
        <img src={thumbnailUrl} alt={title} className="w-full h-full object-cover brightness-[0.6]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent" />
      </div>
      <div className="absolute bottom-[35%] left-12 max-w-lg space-y-4">
        <h1 className="text-5xl font-bold text-white drop-shadow-lg">{title}</h1>
        <p className="text-lg text-gray-200 line-clamp-3">{description}</p>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 bg-white text-black px-6 py-2 rounded font-semibold hover:bg-gray-200 transition">
            <FaPlay /> Play
          </button>
          <button className="flex items-center gap-2 bg-gray-500/70 text-white px-6 py-2 rounded font-semibold hover:bg-gray-500/50 transition">
            <FaInfoCircle /> More Info
          </button>
        </div>
      </div>
    </div>
  );
}
