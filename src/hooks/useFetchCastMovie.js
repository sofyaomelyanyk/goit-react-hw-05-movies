import { getCastMovie } from 'servises/castMoviesApi';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const useFetchCastMovie = () => {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    async function getMovie() {
      try {
        const data = await getCastMovie(movieId);
        setMovie(data.cast);
        setIsLoading(true);

        if (data.cast.length === 0) {
          throw new Error();
        }
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
