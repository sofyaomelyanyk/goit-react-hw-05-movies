import { Link, ItemList, Header } from './Layout.styled';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Loader } from 'components/Loader/Loader';

export const Layout = () => {
  return (
    <>
      <Header>
        <nav>
          <ItemList>
            <li>
              <Link to="/" end>
                Home
              </Link>
            </li>
            <li>
              <Link to="movies">Movies</Link>
            </li>
          </ItemList>
        </nav>
      </Header>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
