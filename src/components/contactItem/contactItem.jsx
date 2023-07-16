import React from 'react';
import { useDispatch } from 'react-redux';
import { DeleteButton, ListItem } from './contactItem.styled';
import { deleteContactThunk } from 'redux/operations';

export const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  return (
    <ListItem>
      {name}: {number}
      <DeleteButton
        type="button"
        onClick={() => dispatch(deleteContactThunk(id))}
      >
        Delete
      </DeleteButton>
    </ListItem>
  );
};
