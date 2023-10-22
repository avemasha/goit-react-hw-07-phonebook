import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


axios.defaults.baseURL = 'https://6532ac3fd80bd20280f5e62e.mockapi.io'

export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',

    async(_, thunkAPI ) => {
        try {
            const response = await axios.get('/contacts');
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
    }
    }
);

export const addContacts = createAsyncThunk(
    'contacts/addContacts',

   async (values, thunkAPI ) => {
    try {
       
        const response = await axios.post('/contacts', values);
        return response.data;   
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
   }
)

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',

    async (contactsId, thunkAPI ) => {
        try {
            const response = await axios.delete(`/contacts/${contactsId}`);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
)