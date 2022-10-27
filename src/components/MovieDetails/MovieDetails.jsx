import { useFetchId } from 'hooks/useFetchId';

export const MovieDetails = () => {
  const data = useFetchId();
  console.log(data);

  return <h2>Hello </h2>;
};
