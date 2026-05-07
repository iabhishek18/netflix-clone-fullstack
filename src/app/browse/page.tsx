import { prisma } from '@/lib/prisma';
import { Billboard } from '@/components/Billboard';
import { MovieCard } from '@/components/MovieCard';

async function getMovies() {
  const [trending, movies] = await Promise.all([
    prisma.movie.findFirst({ where: { trending: true } }),
    prisma.movie.findMany({ take: 20, orderBy: { createdAt: 'desc' } }),
  ]);
  return { trending, movies };
}

export default async function BrowsePage() {
  const { trending, movies } = await getMovies();

  const genres = [...new Set(movies.map((m) => m.genre))];

  return (
    <div className="min-h-screen bg-[#141414]">
      {trending && (
        <Billboard
          title={trending.title}
          description={trending.description}
          videoUrl={trending.videoUrl}
          thumbnailUrl={trending.thumbnailUrl}
        />
      )}
      <div className="px-12 -mt-24 relative z-20 space-y-8 pb-20">
        {genres.map((genre) => (
          <section key={genre}>
            <h2 className="text-xl font-semibold text-white mb-3">{genre}</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
              {movies
                .filter((m) => m.genre === genre)
                .map((movie) => (
                  <MovieCard
                    key={movie.id}
                    id={movie.id}
                    title={movie.title}
                    thumbnailUrl={movie.thumbnailUrl}
                    genre={movie.genre}
                    duration={movie.duration}
                    maturityRating={movie.maturityRating}
                  />
                ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
