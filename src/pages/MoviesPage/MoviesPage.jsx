import { Outlet } from 'react-router-dom';
export const MoviesPage = () => {
  return (
    <>
      <h2 >Movies</h2>
      <Outlet />
    </>
  );
};
