import { ButtonBack } from './Button.styled';

export const Button = ({ onClick }) => {
  return (
    <ButtonBack onClick={onClick} type="button">
      Go back
    </ButtonBack>
  );
};
