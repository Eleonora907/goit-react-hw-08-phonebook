import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Notiflix from 'notiflix';
import { selectContacts } from 'redux/selectors';
import { addContactThunk } from 'redux/operations';
import { Button, Form, Input, Label } from './contactForm.styled';


export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleChange = e => {
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
