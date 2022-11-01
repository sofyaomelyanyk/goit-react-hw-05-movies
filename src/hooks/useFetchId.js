import { getDetailMovie } from 'servises/detalilMovieApi';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const useFetchId = () => {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    async function getMovie() {
      try {
        const data = await getDetailMovie(movieId);
        setIsLoading(true);
        setMovie(data);
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getMovie();
  }, [movieId]);

  return { movie, error, isLoading };
};
