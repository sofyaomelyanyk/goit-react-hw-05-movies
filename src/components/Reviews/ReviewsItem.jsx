export const ReviewsItem = ({ movie: { results } }) => {
  return (
    <div>
      {results.map(({ author, content }) => {
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
