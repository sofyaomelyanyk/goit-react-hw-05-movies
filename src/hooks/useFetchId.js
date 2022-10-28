import { getDetailMovie } from 'servises/detalilMovieApi';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const useFetchId = () => {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    const message = 'Sorry, server error';
    setIsLoading(true);
    setError(null);
    getDetailMovie(movieId)
      .then(setMovie)
      .catch(setError(message))
      .finally(setIsLoading(false));
  }, [movieId, error, isLoading]);

  return { movie, error, isLoading };
};
