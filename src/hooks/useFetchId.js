import { getDetailMovie } from 'servises/detalilMovieApi';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const useFetchId = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  console.log();

  useEffect(() => {
    getDetailMovie(movieId).then(setMovie);
  }, [movieId]);

  return movie;
};
