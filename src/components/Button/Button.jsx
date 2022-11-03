import { ButtonBack } from './Button.styled';
import PropTypes from 'prop-types';

export const Button = ({ onClick }) => {
  return (
    <ButtonBack onClick={onClick} type="button">
      Go back
    </ButtonBack>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
};
