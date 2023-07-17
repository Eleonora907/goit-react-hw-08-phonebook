import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;
export const selectFilter = state => state.filter.value;
export const selectLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectIsEditing = state => state.contacts.isEditing;
export const selectCurrentContact = state => state.contacts.currentContact;
export const selectUser = state => state.auth.user;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectIsRefreshing = state => state.auth.isRefreshing;


export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase().trim())
    );
  }
);

