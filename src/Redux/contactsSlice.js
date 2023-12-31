import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact(state, action) {
      const newContact = action.payload;

      const contactNames = state.map(contact => contact.name.toLowerCase());

      if (contactNames.includes(newContact.name.toLowerCase())) {
        alert(`${newContact.name} is already in contacts!`);
        return state;
      } else {
        state.unshift(action.payload);
      }
    },

    deleteContact(state, action) {
      const index = state.findIndex(task => task.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const contactsReducer = contactsSlice.reducer;

export const { addContact, deleteContact } = contactsSlice.actions;
