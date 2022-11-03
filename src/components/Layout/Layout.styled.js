import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  margin-bottom: 40px;
  margin-top: 40px;
  padding-bottom: 40px;
  border-bottom: 1px solid black;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  font-size: 25px;
  color: black;

  &.active {
    color: red;
  }
`;

export const ItemList = styled.ul`
  margin: 0;
  list-style: none;
  display: flex;
  justify-content: start;
  gap: 30px;
  padding-left: 30px;
`;
