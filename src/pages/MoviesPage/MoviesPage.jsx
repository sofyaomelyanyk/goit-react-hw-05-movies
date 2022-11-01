import { useFetchSearchMovies } from 'hooks/useFetchSearchMovies';
import { Loader } from 'components/Loader/Loader';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { useState } from 'react';

export const MoviesPage = () => {
  const { movies, error, isLoading, onSubmit } = useFetchSearchMovies();
  const message = 'Nothing found for your request!';

  const [query, setQuery] = useState('');

  const onChangeName = e => {
    setQuery(e.currentTarget.value.toLowerCase());
  };

  const onSubmitForm = e => {
    e.preventDefault();

    if (query.trim() === '') {
      alert('Please, fill the form');
      return;
    }

    onSubmit(query);
    reset();
  };

  const reset = () => {
    setQuery('');
  };

  return (
    <>
      <form onSubmit={onSubmitForm}>
        <input
          type="text"
          value={query}
          name="queryname"
          autoComplete="off"
          autoFocus
          onChange={onChangeName}
        />
        <button type="submit">Search</button>
      </form>
      {isLoading && <Loader />}
      {error && <h2>{message}</h2>}
      {movies && (
        <ul>
          <MoviesList movies={movies} />
        </ul>
      )}
    </>
  );
};
