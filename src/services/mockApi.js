import axios from 'axios';

const contactApi = axios.create({
  baseURL: 'https://64b27efc38e74e386d552d9d.mockapi.io',
});

export const fetchContacts = async () => {
  const { data } = await contactApi.get('/contacts');
  return data;
};

export const fetchDeleteContact = async id => {
  const { data } = await contactApi.delete(`/contacts/${id}`);
  return data;
};

export const fetchAddContact = async contact => {
  const { data } = await contactApi.post('/contacts', contact);
  return data;
};