import { createSlice } from '@reduxjs/toolkit';
import {contactInitialState} from './contactsSlice'

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

  export const { addFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;