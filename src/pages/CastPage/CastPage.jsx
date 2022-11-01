import { useFetchCastMovie } from 'hooks/useFetchCastMovie';
import { Loader } from 'components/Loader/Loader';
import { useState } from 'react';

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
        <div>
          {movie.map(({ name, id, profile_path, character }) => {
            return (
              <ul key={id}>
                <li>
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
                </li>
                <li>{name}</li>
                <li>{character}</li>
              </ul>
            );
          })}
        </div>
      )}
    </>
  );
};
