import { useFetchSearchMovies } from 'hooks/useFetchSearchMovies';
import { Loader } from 'components/Loader/Loader';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { useState } from 'react';
import { Form, FormInput, FormButton, ListItem } from './MoviesPage.styled';

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
      <Form onSubmit={onSubmitForm}>
        <FormInput
          type="text"
          value={query}
          name="queryname"
          autoComplete="off"
          autoFocus
          onChange={onChangeName}
        />
        <FormButton type="submit">Search</FormButton>
      </Form>
      {isLoading && <Loader />}
      {error && <h3>{message}</h3>}
      {movies && (
        <ListItem>
          <MoviesList movies={movies} />
        </ListItem>
      )}
    </>
  );
};
