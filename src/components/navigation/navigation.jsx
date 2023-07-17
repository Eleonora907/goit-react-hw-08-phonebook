import { UserMenu } from 'components/userMenu/userMenu';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/selectors';
import { Header, LoginWrapper, NavItem } from './navigation.styled';
import { useNavigate } from 'react-router';
import { DeleteButton } from 'components/contactItem/contactItem.styled';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();
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
            <DeleteButton onClick={() => navigate('/login')}>
              Login
            </DeleteButton>
            <DeleteButton onClick={() => navigate('/register')}>
              Register
            </DeleteButton>
          </div>
        )}
      </LoginWrapper>
    </Header>
  );
};
