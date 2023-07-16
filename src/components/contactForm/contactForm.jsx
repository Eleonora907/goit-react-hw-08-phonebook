import React from 'react';
import { Button, Form, Input, Label } from './contactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import Notiflix from 'notiflix';
import { selectContacts } from 'redux/selectors';
import { addContactThunk } from 'redux/operations';

export const ContactForm = () => {
  const [name, setName] = React.useState('');
  const [number, setNumber] = React.useState('');
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const isContactExist = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isContactExist) {
      Notiflix.Notify.failure(`${name} is already in contacts`);
      return;
    }
    dispatch(addContactThunk({ name, number }));
    setName('');
    setNumber('');
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          required
        />
      </Label>
      <Label>
        Number
        <Input
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          required
        />
      </Label>
      <Button type="submit">Add Contact</Button>
    </Form>
  );
};
