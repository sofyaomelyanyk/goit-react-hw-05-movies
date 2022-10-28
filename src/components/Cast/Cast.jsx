import { useFetchCastMovie } from 'hooks/useFetchCastMovie';
import { Loader } from 'components/Loader/Loader';
import { CastItem } from './CastItem';

export const Cast = () => {
  const { movie, error, isLoading } = useFetchCastMovie();
  const message = 'Sorry, server error';
  return (
    <>
      {isLoading && <Loader />}
      {error && <h2>{message}</h2>}
      {movie && <CastItem movie={movie} />}
    </>
  );
};
