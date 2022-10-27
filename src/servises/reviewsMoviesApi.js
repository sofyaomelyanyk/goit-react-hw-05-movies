const KEY = '762b5545ec681e46f6d7d0ae5d3e3243';

export const getReviewsMovie = async (id) => {
  const resp = await fetch(
    `https://api.themoviedb.org/3//movie/${id}/reviews?api_key=${KEY}`
  );
  const data = resp.json();
  return data;
};
