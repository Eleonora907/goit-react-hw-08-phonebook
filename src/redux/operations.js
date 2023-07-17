import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchAddContact,
  fetchContacts,
  fetchDeleteContact,
  fetchEditContact,
} from 'services/api';

export const getContactsThunk = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await fetchContacts();
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const response = await fetchAddContact(contact);
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const response = await fetchDeleteContact(id);
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },

);

export const editContactThunk = createAsyncThunk(
  'contacts/editContact',
  async ({ id, name, number }, thunkAPI) => {
    try {
      const response = await fetchEditContact({ id, name, number });
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
