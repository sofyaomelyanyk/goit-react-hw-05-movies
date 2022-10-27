import { Link } from 'react-router-dom';

export const MoviesItem = ({movies}) => {
  return (
    <>
      {movies.map(({ id, title }) => {
        return (
          <li key={id}>
            <Link to={`movies/${id}`}>{title}</Link>
          </li>
        );
      })}
    </>
  );
};
