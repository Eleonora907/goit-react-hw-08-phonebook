import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerThunk } from 'redux/auth/authOperations';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { StyledBtn, StyledForm, StyledInput, Wrapper } from 'pages/loginPage/loginPage.styled';


const RegisterPage = () => {
  const [credentials, setCredentials] = useState({
    name: '',
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

    dispatch(registerThunk(credentials)).then(() =>
      toast.success(`You're successfully registered!`)
    );
  };

  return (
    <Wrapper>
      <StyledForm onSubmit={handleSubmit}>
      <p>Register to see more</p>
      <label>
        <span>Name</span>
        <StyledInput
          type="text"
          name="name"
          value={credentials.name}
          onChange={handleChangeInput}
          placeholder="Enter your name..."
        />
      </label>
      <label>
        <span>Email</span>
        <StyledInput
          type="email"
          name="email"
          value={credentials.email}
          onChange={handleChangeInput}
          placeholder="Enter your email..."
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
        />
      </label>
      <StyledBtn type="submit">Register</StyledBtn>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </StyledForm>
    </Wrapper>
  );
};

export default RegisterPage;