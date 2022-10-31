import { Link } from './Layout.styled';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/" end>
              Home
            </Link>
          </li>
          <li>
            <Link to="movies">Movies</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};
