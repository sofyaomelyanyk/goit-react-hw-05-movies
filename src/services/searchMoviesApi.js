const KEY = '762b5545ec681e46f6d7d0ae5d3e3243';

export const getSearchMovies = async (query) => {
  const resp = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&query=${query}`
  );
  const data = resp.json();
  return data;
};
