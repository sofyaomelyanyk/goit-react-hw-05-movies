import { getReviewsMovie } from 'servises/reviewsMoviesApi';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const useReviewMovie = () => {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    async function getMovie() {
      try {
        const data = await getReviewsMovie(movieId);
        setIsLoading(true);
        setMovie(data.results);
        if (data.results.length === 0) {
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
