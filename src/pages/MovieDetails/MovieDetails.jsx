import { useFetchId } from 'hooks/useFetchId';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { Outlet } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';

export const MovieDetails = () => {
  const { movie, error, isLoading } = useFetchId();
  console.log(movie);
  const message = 'Sorry, server error';
  return (
    <>
      {isLoading && <Loader />}
      {error && <h2>{message}</h2>}
      {movie && <MovieCard movie={movie} />}
      <Outlet/>
    </>
  );
};
