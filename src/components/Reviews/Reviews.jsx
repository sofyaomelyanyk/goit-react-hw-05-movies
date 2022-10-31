import { useReviewMovie } from 'hooks/useReviewMovie';
import { ReviewsItem } from './ReviewsItem';
import { Loader } from 'components/Loader/Loader';

export const Reviews = () => {
  const { movie, error, isLoading } = useReviewMovie();
  console.log(movie)

  const message = `We don't have any reviews for this movie.`;
  return (
    <>
      {isLoading && <Loader />}
      {error && <h2>{message}</h2>}
      {movie && <ReviewsItem movie={movie} />}
    </>
  );
};
