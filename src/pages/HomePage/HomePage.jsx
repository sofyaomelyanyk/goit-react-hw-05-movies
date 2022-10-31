import { MoviesList } from 'components/MoviesList/MoviesList';
import { Loader } from 'components/Loader/Loader';
import { useState, useEffect } from 'react';
import { getTrandingMovies } from 'servises/trandingMoviesApi';

export const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchTrandingMovies() {
      const message = 'Nothing found for your request!';
      try {
        setIsLoading(true);
        setError(null);
        const data = await getTrandingMovies();
        console.log(data.results);
        setMovies(data.results);

        if (!data.results.length) {
          throw new Error(message);
        }
      } catch {
        setError(message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchTrandingMovies();
  }, []);

  return (
    <>
      <h2>Trending today</h2>
      {isLoading && <Loader />}
      {error && <h2>{error}</h2>}
      {movies && (
        <ul>
          <MoviesList movies={movies} />
        </ul>
      )}
    </>
  );
};
