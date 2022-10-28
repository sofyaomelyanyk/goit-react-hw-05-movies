import { useFetchId } from 'hooks/useFetchId';
import { MovieCard } from 'components/MovieCard/MovieCard';

export const MovieDetails = () => {
  const movie = useFetchId();
  console.log(movie);

  return movie && <MovieCard movie={movie}  />;
};
