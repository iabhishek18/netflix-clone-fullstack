export interface Movie {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  backdropUrl: string;
  genre: string;
  year: number;
  rating: string;
  duration: string;
  cast: string[];
}

export const movies: Movie[] = [
  { id: '1', title: 'Inception', description: 'A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.', thumbnailUrl: 'https://picsum.photos/seed/inception/400/225', backdropUrl: 'https://picsum.photos/seed/inception-bg/1280/720', genre: 'Sci-Fi', year: 2010, rating: 'PG-13', duration: '2h 28m', cast: ['Leonardo DiCaprio', 'Tom Hardy', 'Elliot Page'] },
  { id: '2', title: 'The Dark Knight', description: 'When the menace known as the Joker wreaks havoc on Gotham, Batman must accept one of the greatest psychological tests of his ability to fight injustice.', thumbnailUrl: 'https://picsum.photos/seed/darknight/400/225', backdropUrl: 'https://picsum.photos/seed/darknight-bg/1280/720', genre: 'Action', year: 2008, rating: 'PG-13', duration: '2h 32m', cast: ['Christian Bale', 'Heath Ledger', 'Aaron Eckhart'] },
  { id: '3', title: 'Interstellar', description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanitys survival.', thumbnailUrl: 'https://picsum.photos/seed/interstellar/400/225', backdropUrl: 'https://picsum.photos/seed/interstellar-bg/1280/720', genre: 'Sci-Fi', year: 2014, rating: 'PG-13', duration: '2h 49m', cast: ['Matthew McConaughey', 'Anne Hathaway', 'Jessica Chastain'] },
  { id: '4', title: 'Parasite', description: 'Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.', thumbnailUrl: 'https://picsum.photos/seed/parasite/400/225', backdropUrl: 'https://picsum.photos/seed/parasite-bg/1280/720', genre: 'Drama', year: 2019, rating: 'R', duration: '2h 12m', cast: ['Song Kang-ho', 'Lee Sun-kyun', 'Cho Yeo-jeong'] },
  { id: '5', title: 'Get Out', description: 'A young African-American visits his white girlfriends parents for the weekend, where his simmering uneasiness about their reception of him eventually reaches a boiling point.', thumbnailUrl: 'https://picsum.photos/seed/getout/400/225', backdropUrl: 'https://picsum.photos/seed/getout-bg/1280/720', genre: 'Horror', year: 2017, rating: 'R', duration: '1h 44m', cast: ['Daniel Kaluuya', 'Allison Williams', 'Bradley Whitford'] },
  { id: '6', title: 'The Grand Budapest Hotel', description: 'A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy.', thumbnailUrl: 'https://picsum.photos/seed/budapest/400/225', backdropUrl: 'https://picsum.photos/seed/budapest-bg/1280/720', genre: 'Comedy', year: 2014, rating: 'R', duration: '1h 39m', cast: ['Ralph Fiennes', 'Tony Revolori', 'Saoirse Ronan'] },
  { id: '7', title: 'Mad Max: Fury Road', description: 'In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland.', thumbnailUrl: 'https://picsum.photos/seed/madmax/400/225', backdropUrl: 'https://picsum.photos/seed/madmax-bg/1280/720', genre: 'Action', year: 2015, rating: 'R', duration: '2h', cast: ['Tom Hardy', 'Charlize Theron', 'Nicholas Hoult'] },
  { id: '8', title: 'Hereditary', description: 'A grieving family is haunted by tragic and disturbing occurrences after the death of their secretive grandmother.', thumbnailUrl: 'https://picsum.photos/seed/hereditary/400/225', backdropUrl: 'https://picsum.photos/seed/hereditary-bg/1280/720', genre: 'Horror', year: 2018, rating: 'R', duration: '2h 7m', cast: ['Toni Collette', 'Milly Shapiro', 'Gabriel Byrne'] },
  { id: '9', title: 'Whiplash', description: 'A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing.', thumbnailUrl: 'https://picsum.photos/seed/whiplash/400/225', backdropUrl: 'https://picsum.photos/seed/whiplash-bg/1280/720', genre: 'Drama', year: 2014, rating: 'R', duration: '1h 46m', cast: ['Miles Teller', 'J.K. Simmons', 'Melissa Benoist'] },
  { id: '10', title: 'Superbad', description: 'Two co-dependent high school seniors are forced to deal with separation anxiety after their plan to stage a booze-soaked party goes awry.', thumbnailUrl: 'https://picsum.photos/seed/superbad/400/225', backdropUrl: 'https://picsum.photos/seed/superbad-bg/1280/720', genre: 'Comedy', year: 2007, rating: 'R', duration: '1h 53m', cast: ['Jonah Hill', 'Michael Cera', 'Seth Rogen'] },
  { id: '11', title: 'Arrival', description: 'A linguist works with the military to communicate with alien lifeforms after twelve mysterious spacecraft appear around the world.', thumbnailUrl: 'https://picsum.photos/seed/arrival/400/225', backdropUrl: 'https://picsum.photos/seed/arrival-bg/1280/720', genre: 'Sci-Fi', year: 2016, rating: 'PG-13', duration: '1h 56m', cast: ['Amy Adams', 'Jeremy Renner', 'Forest Whitaker'] },
  { id: '12', title: 'John Wick', description: 'An ex-hit-man comes out of retirement to track down the gangsters that killed his dog and took everything from him.', thumbnailUrl: 'https://picsum.photos/seed/johnwick/400/225', backdropUrl: 'https://picsum.photos/seed/johnwick-bg/1280/720', genre: 'Action', year: 2014, rating: 'R', duration: '1h 41m', cast: ['Keanu Reeves', 'Michael Nyqvist', 'Alfie Allen'] },
  { id: '13', title: 'The Conjuring', description: 'Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse.', thumbnailUrl: 'https://picsum.photos/seed/conjuring/400/225', backdropUrl: 'https://picsum.photos/seed/conjuring-bg/1280/720', genre: 'Horror', year: 2013, rating: 'R', duration: '1h 52m', cast: ['Vera Farmiga', 'Patrick Wilson', 'Lili Taylor'] },
  { id: '14', title: 'The Social Network', description: 'As Harvard student Mark Zuckerberg creates the social networking site that would become known as Facebook, he is sued by the twins who claimed he stole their idea.', thumbnailUrl: 'https://picsum.photos/seed/socialnet/400/225', backdropUrl: 'https://picsum.photos/seed/socialnet-bg/1280/720', genre: 'Drama', year: 2010, rating: 'PG-13', duration: '2h', cast: ['Jesse Eisenberg', 'Andrew Garfield', 'Justin Timberlake'] },
  { id: '15', title: 'Dune', description: 'Feature adaptation of Frank Herberts science fiction novel about the son of a noble family entrusted with the protection of the most valuable asset in the galaxy.', thumbnailUrl: 'https://picsum.photos/seed/dune/400/225', backdropUrl: 'https://picsum.photos/seed/dune-bg/1280/720', genre: 'Sci-Fi', year: 2021, rating: 'PG-13', duration: '2h 35m', cast: ['Timothée Chalamet', 'Zendaya', 'Oscar Isaac'] },
  { id: '16', title: 'The Hangover', description: 'Three buddies wake up from a bachelor party in Las Vegas, with no memory of the previous night and the bachelor missing.', thumbnailUrl: 'https://picsum.photos/seed/hangover/400/225', backdropUrl: 'https://picsum.photos/seed/hangover-bg/1280/720', genre: 'Comedy', year: 2009, rating: 'R', duration: '1h 40m', cast: ['Bradley Cooper', 'Ed Helms', 'Zach Galifianakis'] },
  { id: '17', title: 'Avengers: Endgame', description: 'After the devastating events of Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more to reverse Thanos actions.', thumbnailUrl: 'https://picsum.photos/seed/endgame/400/225', backdropUrl: 'https://picsum.photos/seed/endgame-bg/1280/720', genre: 'Action', year: 2019, rating: 'PG-13', duration: '3h 1m', cast: ['Robert Downey Jr.', 'Chris Evans', 'Scarlett Johansson'] },
  { id: '18', title: 'Marriage Story', description: 'Noah Baumbach s incisive and compassionate look at a marriage breaking up and a family staying together.', thumbnailUrl: 'https://picsum.photos/seed/marriage/400/225', backdropUrl: 'https://picsum.photos/seed/marriage-bg/1280/720', genre: 'Drama', year: 2019, rating: 'R', duration: '2h 17m', cast: ['Adam Driver', 'Scarlett Johansson', 'Laura Dern'] },
];

export function getMovieById(id: string): Movie | undefined {
  return movies.find((m) => m.id === id);
}

export function getMoviesByGenre(genre: string): Movie[] {
  return movies.filter((m) => m.genre === genre);
}

export function searchMovies(query: string): Movie[] {
  const q = query.toLowerCase();
  return movies.filter((m) => m.title.toLowerCase().includes(q) || m.genre.toLowerCase().includes(q) || m.cast.some((c) => c.toLowerCase().includes(q)));
}

export function getGenres(): string[] {
  return [...new Set(movies.map((m) => m.genre))];
}
