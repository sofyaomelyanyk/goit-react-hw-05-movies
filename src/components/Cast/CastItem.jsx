import { Loader } from 'components/Loader/Loader';
import { useState } from 'react';

export const CastItem = ({ movie: { cast } }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoaded = () => {
    setIsLoaded(true);
  };
  const startUrl = 'https://image.tmdb.org/t/p/w500/';
  return (
    <div>
      {cast.map(({ name, id, profile_path, character }) => {
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
                width="230"
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
  );
};