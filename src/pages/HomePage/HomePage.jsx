import { MoviesList } from 'components/MoviesList/MoviesList';
import { Loader } from 'components/Loader/Loader';
import { useState, useEffect } from 'react';
import { getTrandingMovies } from 'services/trandingMoviesApi';
import { ListItem, HomePageTitle } from './HomePage.styled';

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
      <div>
        <HomePageTitle>Trending today</HomePageTitle>
        {isLoading && <Loader />}
        {error && <h2>{error}</h2>}
        {movies && (
          <ListItem>
            <MoviesList movies={movies} />
          </ListItem>
        )}
      </div>
    </>
  );
};
