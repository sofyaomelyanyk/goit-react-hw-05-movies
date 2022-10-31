import { useState } from 'react';

export const Searchbar = ({ onSubmit }) => {
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
    </>
  );
};
