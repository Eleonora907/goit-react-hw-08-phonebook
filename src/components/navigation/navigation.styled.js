import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  border-bottom: 2px solid grey;
  gap: 25px;
  padding: 40px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
`;

export const LoginWrapper = styled.div`
display: flex;
margin-left: auto;
justify-content: space-between;
margin-right: 0px;
align-items: center;
gap: 5px;
`
export const NavItem = styled(NavLink)`
  gap: 40px;
  padding: 5px;
  border-radius: 4px;
  text-decoration: none;
  color: white;
  font-size: 20px;
  margin-right: 20px;

  &.active {
    color: red;
  }
  &:hover:not(.active) {
    background-color: lightblue;
  }
`;
