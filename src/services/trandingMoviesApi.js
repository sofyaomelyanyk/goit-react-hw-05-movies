const KEY = '762b5545ec681e46f6d7d0ae5d3e3243';

export const getTrandingMovies = async () => {
  const resp = await fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${KEY}`
  );
  const data = resp.json();
  return data;
};


