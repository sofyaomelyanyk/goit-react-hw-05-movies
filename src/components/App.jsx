import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { HomePage } from 'pages/HomePage/HomePage';

const MoviesPage = lazy(() =>
  import('pages/MoviesPage/MoviesPage').then(module => ({
    ...module,
    default: module.MoviesPage,
  }))
);

const MovieDetails = lazy(() =>
  import('pages/MovieDetails/MovieDetails').then(module => ({
    ...module,
    default: module.MovieDetails,
  }))
);

const CastPage = lazy(() =>
  import('pages/CastPage/CastPage').then(module => ({
    ...module,
    default: module.CastPage,
  }))
);

const ReviewsPage = lazy(() =>
  import('pages/ReviewsPage/ReviewsPage').then(module => ({
    ...module,
    default: module.ReviewsPage,
  }))
);

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:movieId/*" element={<MovieDetails />}>
          <Route path="cast" element={<CastPage />} />
          <Route path="reviews" element={<ReviewsPage />} />
        </Route>
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
};
