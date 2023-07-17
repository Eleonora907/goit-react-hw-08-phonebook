import { Button, Form, Input } from 'components/contactForm/contactForm.styled';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editContactThunk } from 'redux/operations';
import { toggleEditing } from 'redux/phoneBookSlice';
import { selectCurrentContact } from 'redux/selectors';

export const EditForm = () => {
  const currentContact = useSelector(selectCurrentContact);

  const [name, setName] = useState(currentContact.name);
  const [number, setNumber] = useState(currentContact.number);
  const dispatch = useDispatch();

  const handleChangeValue = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(editContactThunk({ id: currentContact.id, name, number }));
    dispatch(toggleEditing());
  };

  return (
    <Form onSubmit={handleSubmit}>
      <label>
        New name
        <Input
          value={name}
          onChange={handleChangeValue}
          type="text"
          name="name"
          placeholder="Edit name"
          required
        />
      </label>
      <label>
        New phone number
        <Input
          value={number}
          onChange={handleChangeValue}
          type="tel"
          name="number"
          placeholder="Edit phone number"
          required
        />
      </label>

      <Button type="submit">Edit contact</Button>
    </Form>
  );
};
