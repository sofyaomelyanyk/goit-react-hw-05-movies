import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export const MoviesList = ({movies}) => {
   const location = useLocation();
   console.log(location);
   return (
     <>
       {movies.map(({ id, title }) => {
         return (
           <li key={id}>
             <Link state={{ from: location }} to={`/movies/${id}`}>
               {title}
             </Link>
           </li>
         );
       })}
     </>
   );
};
