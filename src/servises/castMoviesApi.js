const KEY = '762b5545ec681e46f6d7d0ae5d3e3243';

export const getCastMovie = async (id) => {
  const resp = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${KEY}`
  );
  const data = resp.json();
  return data;
};
// https://api.themoviedb.org/3/movie/913290/credits?api_key=762b5545ec681e46f6d7d0ae5d3e3243