import { useReviewMovie } from 'hooks/useReviewMovie';

import { Loader } from 'components/Loader/Loader';

export const ReviewsPage = () => {
  const { movie, error, isLoading } = useReviewMovie();

  return (
    <>
      {isLoading && <Loader />}
      {error && <h2>We don't have any reviews for this movie.</h2>}
      {movie && (
        <div>
          {movie.map(({ author, content }) => {
            return (
              <ul key={author}>
                <li>Author: {author}</li>
                <li>{content}</li>
              </ul>
            );
          })}
        </div>
      )}
    </>
  );
};
