import { Searchbar } from 'components/Searchbar/Searchbar';
import { useFetchSearchMovies } from 'hooks/useFetchSearchMovies';
import { Loader } from 'components/Loader/Loader';
import { MoviesList } from 'components/MoviesList/MoviesList';

export const SearchPage = () => {
  const { movies, error, isLoading, onSubmit } = useFetchSearchMovies();
  const message = 'Nothing found for your request!';
  return (
    <>
      <Searchbar onSubmit={onSubmit} />
      {isLoading && <Loader />}
      {error && <h2>{message}</h2>}
      {movies && <MoviesList movies={movies} />}
    </>
  );
};
