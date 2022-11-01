import { Button } from 'components/Button/Button';
import { Loader } from 'components/Loader/Loader';
import { useState } from 'react';
import { useNavigate, useLocation, NavLink } from 'react-router-dom';

export const MovieCard = ({
  movie: { title, poster_path, overview, genres, vote_average },
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  const handleLoaded = () => {
    setIsLoaded(true);
  };
  const startUrl = 'https://image.tmdb.org/t/p/w500/';
  const userScore = Math.round(vote_average * 10);
  const onClick = () => {
    navigate(location?.state?.from.pathname ?? '/');
  };
  return (
    <>
      <Button onClick={onClick} />
      <div>
        <img
          src={`${startUrl}${poster_path}`}
          width="250"
          height="350"
          alt=""
          onLoad={handleLoaded}
          style={{ display: isLoaded ? 'block' : 'none' }}
        />
        {!isLoaded && <Loader />}
        <div>
          <h1>{title}</h1>
          <p>User score: {userScore}%</p>
          <p>Overview</p>
          <p>{overview}</p>
          <p>Genres</p>
          <ul>
            {genres.map(({ id, name }) => {
              return <li key={id}>{name}</li>;
            })}
          </ul>
        </div>
      </div>
      <div>
        <ul>
          <li>
            <NavLink to="cast" state={location.state}>
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink to="reviews" state={location.state}>
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};
