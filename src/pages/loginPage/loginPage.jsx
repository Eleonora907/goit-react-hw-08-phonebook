import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginThunk } from 'redux/auth/authOperations';
import { toast } from 'react-toastify';
import { LinkStyled, StyledBtn, StyledForm, StyledInput, Wrapper } from './loginPage.styled';


const LoginPage = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();

  const handleChangeInput = ({ target }) => {
    const { name, value } = target;
    setCredentials(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(loginThunk(credentials))
      .then(() => toast.success(`Welcome back!`))
      .catch(() =>
        toast.error(
          'You entered an incorrect password or email. Please, try again.'
        )
      );
  };

  return (
    <Wrapper>
      <StyledForm onSubmit={handleSubmit}>
      <p>Welcome to Phonebook!</p>
      <label>
        <span>Email</span>
        <StyledInput
          type="email"
          name="email"
          value={credentials.email}
          onChange={handleChangeInput}
          placeholder="Enter your email..."
          required
        />
      </label>
      <label>
        <span>Password</span>
        <StyledInput
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChangeInput}
          placeholder="Enter your password..."
          required
        />
      </label>
      <StyledBtn type="submit">Login</StyledBtn>

      <p>
        Don't have an account? <LinkStyled to="/register">Register</LinkStyled>
      </p>
    </StyledForm>
    </Wrapper>
  );
};

export default LoginPage;