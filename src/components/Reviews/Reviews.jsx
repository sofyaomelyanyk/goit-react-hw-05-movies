import { useReviewMovie } from 'hooks/useReviewMovie';
import { ReviewsItem } from './ReviewsItem';
import { Loader } from 'components/Loader/Loader';

export const Reviews = () => {
  const { movie, error, isLoading } = useReviewMovie();

  const message = 'Sorry, server error';
  return (
    <>
      {isLoading && <Loader />}
      {error && <h2>{message}</h2>}
      {movie && <ReviewsItem movie={movie} />}
    </>
  );
};
