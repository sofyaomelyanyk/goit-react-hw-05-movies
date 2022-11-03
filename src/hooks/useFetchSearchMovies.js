import { getSearchMovies } from 'services/searchMoviesApi';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const useFetchSearchMovies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const searchQuery = searchParams.get('queryname');

  const onSubmit = query => {
    setSearchParams({ queryname: query });
  };

  useEffect(() => {
    if (!searchQuery) return;

    async function getMovie() {
      try {
        const data = await getSearchMovies(searchQuery);
        setIsLoading(true);
        setMovies(data.results);
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getMovie();
  }, [searchQuery]);

  return { movies, error, isLoading, onSubmit };
};
