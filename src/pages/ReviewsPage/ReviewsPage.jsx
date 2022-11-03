import { useReviewMovie } from 'hooks/useReviewMovie';
import { ListItem, Item, TextItem } from './ReviewsPage.styled';
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
              <ListItem key={author}>
                <Item>
                  Author: <span>{author}</span>
                </Item>
                <TextItem>{content}</TextItem>
              </ListItem>
            );
          })}
        </div>
      )}
    </>
  );
};
