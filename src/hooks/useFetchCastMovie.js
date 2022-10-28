import { getCastMovie } from 'servises/castMoviesApi';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const useFetchCastMovie = () => {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    async function getMovie() {
      const message = 'Nothing found for your request!';

      try {
        const data = await getCastMovie(movieId);
        console.log(data);
        setMovie(data);
        setIsLoading(true);
      } catch {
        setError(message);
      } finally {
        setIsLoading(false);
      }
    }
    getMovie();
  }, [movieId, error, isLoading]);

  return { movie, error, isLoading };
};
