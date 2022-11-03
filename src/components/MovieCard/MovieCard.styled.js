import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  text-decoration: none;
  color: black;

  &.active {
    color: red;
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  gap: 40px;
  padding: 0 30px;
  margin-bottom: 40px;
`;

export const MainText = styled.p`
  font-size: 18px;
  font-weight: 700;
`;

export const TextContainer = styled.p`
  line-height: 1.3;
  width: 400px;
`;

export const Span = styled.span`
  font-weight: 400;
`;

export const ListItem = styled.ul`
  list-style: none;
  padding: 0;
`;

export const DetailWrapper = styled.div`
  margin-bottom: 40px;
`;

export const ListDetail = styled.ul`
  list-style: none;
  margin-left: 30px;
  padding: 0;
  display: flex;
  gap: 10px;
  flex-direction: column;
`;

export const ItemDetail = styled.li`
  font-size: 20px;
`;
