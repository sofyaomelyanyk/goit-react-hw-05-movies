export const ReviewsItem = ({ movie }) => {
  return (
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
  );
};
