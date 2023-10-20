import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContacts, deleteContact } from './operations';


const contactInitialState = {
  filter: '',
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], isLoading: false, error: null },
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.rejected]: handleRejected,
    [addContacts.pending]: handlePending,
    [addContacts.rejected]: handleRejected,
    [deleteContact.pending]: handlePending,
    [deleteContact.rejected]: handleRejected,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [addContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        task => task.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
  },
});

const filterSlice = createSlice({
  name: 'filter',
  initialState: contactInitialState,
  reducers: {
    addFilter: {
      reducer(state, action) {
        state.filter = action.payload;
      },
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { addFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;