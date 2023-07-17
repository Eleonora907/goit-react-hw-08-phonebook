import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  width: 300px;
  margin-right: auto;
  margin-left: auto;

  margin-top: 150px;
  border: 2px solid white;
  border-radius: 20px;
  color: white;
`;

export const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const StyledInput = styled.input`
  display: inline-block;
  background-color: inherit;
  border: none;
  outline: none;
  border-bottom: 2px solid white;
  margin-top: 30px;
  margin-left: 5px;
  color: white;
`;

export const StyledBtn = styled.button`
  margin-top: 30px;
  margin-bottom: 30px;
  height: 30px;
  width: 80px;
  cursor: pointer;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px;
  border: 2px solid white;

  &:hover {
    background-color: darkblue;
  }
`;
export const LinkStyled = styled(NavLink)`
  justify-content: center;
  align-items: center;
  margin-top: 25px;
  &:hover {
    color: #d1ff04ae;
  }
`;