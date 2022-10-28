import { Button } from 'components/Button/Button';

export const MovieCard = ({
  movie: { title, poster_path, overview, genres, vote_average },
}) => {
  const startUrl = 'https://image.tmdb.org/t/p/w500/';
  const userScore = Math.round(vote_average * 10);
  return (
    <>
      <Button />
      <div>
        <img
          src={`${startUrl}${poster_path}`}
          width="250"
          height="350"
          alt=""
        />
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
    </>
  );
};
