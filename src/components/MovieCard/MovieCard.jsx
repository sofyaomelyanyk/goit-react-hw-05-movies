import { Button } from 'components/Button/Button';
import { Loader } from 'components/Loader/Loader';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  CardWrapper,
  MainText,
  Span,
  ListItem,
  TextContainer,
  ListDetail,
  ItemDetail,
  Link,
  DetailWrapper,
} from './MovieCard.styled';

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

  return (
    <>
      <Button onClick={() => navigate(location.state?.from ?? '/')} />
      <CardWrapper>
        <img
          src={`${startUrl}${poster_path}`}
          width="300"
          height="450"
          alt=""
          onLoad={handleLoaded}
          style={{ display: isLoaded ? 'block' : 'none' }}
        />
        {!isLoaded && <Loader />}
        <div>
          <h1>{title}</h1>
          <MainText>
            User score: <Span>{userScore}%</Span>
          </MainText>
          <MainText>Overview</MainText>
          <TextContainer>{overview}</TextContainer>
          <MainText>Genres</MainText>
          <ListItem>
            {genres.map(({ id, name }) => {
              return <li key={id}>{name}</li>;
            })}
          </ListItem>
        </div>
      </CardWrapper>
      <DetailWrapper>
        <ListDetail>
          <ItemDetail>
            <Link to="cast" state={location.state}>
              Cast
            </Link>
          </ItemDetail>
          <ItemDetail>
            <Link to="reviews" state={location.state}>
              Reviews
            </Link>
          </ItemDetail>
        </ListDetail>
      </DetailWrapper>
    </>
  );
};
