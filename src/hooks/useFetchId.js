import { getDetailMovie } from 'servises/detalilMovieApi';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const useFetchId = () => {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    async function getMovie() {
      const message = 'Nothing found for your request!';
      
      try {
        const data = await getDetailMovie(movieId);
        setIsLoading(true);
        setMovie(data);

        
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