import { Button } from 'components/contactForm/contactForm.styled';
import { LoginWrapper } from 'components/navigation/navigation.styled';
import { useDispatch, useSelector } from 'react-redux';
import { logoutThunk } from 'redux/auth/authOperations';
import { selectUser } from 'redux/selectors';

export const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <LoginWrapper>
      <p>{user.email}</p>
      <Button onClick={() => dispatch(logoutThunk())}>Logout</Button>
    </LoginWrapper>
  );
};
