import { UserMenu } from 'components/userMenu/userMenu';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/selectors';
import { Header, LoginWrapper, NavItem } from './navigation.styled';
import { DeleteButton } from 'components/contactItem/contactItem.styled';
import { Link } from 'react-router-dom';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  
  return (
    <Header>
      <nav>
        <NavItem to="/">Home</NavItem>
        {isLoggedIn && <NavItem to="/contacts">Contact</NavItem>}
      </nav>
      {isLoggedIn && <UserMenu />}
      <LoginWrapper>
        {!isLoggedIn && (
          <div>
            <DeleteButton>
            <Link to="/login">Login</Link>
            </DeleteButton>
            <DeleteButton>
            <Link to="/register">Register</Link>
            </DeleteButton> 
          </div>
        )}
      </LoginWrapper>
    </Header>
  );
};
