import { useFetchId } from 'hooks/useFetchId';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { NavLink, Outlet } from 'react-router-dom';
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
      <div>
        <ul>
          <li>
            <NavLink to="cast">Cast</NavLink>
          </li>
          <li>
            <NavLink to="reviews">Reviews</NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
};
