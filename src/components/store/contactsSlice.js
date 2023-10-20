import { createSlice, nanoid } from '@reduxjs/toolkit';
export const contactInitialState = {
  contacts: [
    {
      text: { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      id: 1,
      completed: false,
    },
    {
      text: { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      id: 2,
      completed: false,
    },
    {
      text: { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      id: 3,
      completed: false,
    },
    {
      text: { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      id: 4,
      completed: false,
    },
  ],
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactInitialState,
  reducers: {
    addContacts: {
      
      reducer(state, action) {
        state.contacts.push(action.payload);
      },
      prepare(text) {
        return {
          payload: {
            text,
            id: nanoid(),
            completed: false,
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.contacts.findIndex(
        task => task.id === action.payload
      );
      state.contacts.splice(index, 1);
    },
  },
});


export const { addContacts, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
