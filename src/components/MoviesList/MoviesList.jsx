import { useLocation } from 'react-router-dom';
import { List, MovieLink } from './MoviesList.styled';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <List>
      {movies.map(movie => (
        <li key={movie.id}>
          <MovieLink to={`/movies/${movie.id}`} state={{ from: location }}>
            {movie.original_title || movie.name}
          </MovieLink>
        </li>
      ))}
    </List>
  );
};
