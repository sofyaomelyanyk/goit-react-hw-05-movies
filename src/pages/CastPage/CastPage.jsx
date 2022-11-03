import PropTypes from 'prop-types';
import { useFetchCastMovie } from 'hooks/useFetchCastMovie';
import { Loader } from 'components/Loader/Loader';
import { useState } from 'react';
import { ListItem } from './CastPage.styled';

export const CastPage = () => {
  const { movie, error, isLoading } = useFetchCastMovie();
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoaded = () => {
    setIsLoaded(true);
  };
  const startUrl = 'https://image.tmdb.org/t/p/w500/';

  return (
    <>
      {isLoading && <Loader />}
      {error && <h2>We don't have any actors for this movie.</h2>}
      {movie && (
        <ListItem>
          {movie.map(({ name, id, profile_path, character }) => {
            return (
              <li key={id}>
                <img
                  src={
                    profile_path
                      ? `${startUrl}${profile_path}`
                      : `https://remontka.pro/images/change-or-delete-avatar-windows-10.png`
                  }
                  alt={name}
                  width="200"
                  height="300"
                  onLoad={handleLoaded}
                  style={{ display: isLoaded ? 'block' : 'none' }}
                />
                {!isLoaded && <Loader />}

                <p>{name}</p>
                <p>{character}</p>
              </li>
            );
          })}
        </ListItem>
      )}
    </>
  );
};

CastPage.propTypes = {
  movie: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      profile_path: PropTypes.string,
      character: PropTypes.string,
    })
  ),
};
