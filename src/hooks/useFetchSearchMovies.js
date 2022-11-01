import { getSearchMovies } from 'servises/searchMoviesApi';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const useFetchSearchMovies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const searchQuery = searchParams.get('queryname');

  const onSubmit = query => {
    setSearchParams({ queryname: query });
  };

  useEffect(() => {
    if (!searchQuery) return;

    setIsLoading(true);
    getSearchMovies(searchQuery)
      .then(resp => {
        const data = resp.results;
        return setMovies(data);
      })
      .catch(setError)
      .finally(() => setIsLoading(false));
  }, [searchQuery]);

  return { movies, error, isLoading, onSubmit };
};
