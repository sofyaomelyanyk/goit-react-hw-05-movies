import { LinkMovie } from './MoviesList.styled';
import { useLocation } from 'react-router-dom';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  console.log(location);
  return (
    <>
      {movies.map(({ id, title }) => {
        return (
          <li key={id}>
            <LinkMovie state={{ from: location }} to={`/movies/${id}`}>
              {title}
            </LinkMovie>
          </li>
        );
      })}
    </>
  );
};
