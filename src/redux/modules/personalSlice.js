import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  personal: [],
  isLoading: false,
  error: null,
};

export const __postPersonalEdit = createAsyncThunk(
  'postPersonalEdit',
  async (payload, thunkAPI) => {
    try {
      await axios.post('http://localhost:3001/personal', payload);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const personalSlice = createSlice({
  name: 'personal',
  initialState,
  reducers: {},
  extraReducers: {
    [__postPersonalEdit.pending]: (state) => {
      state.isLoading = true;
    },
    [__postPersonalEdit.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.personal = action.payload;
    },
    [__postPersonalEdit.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {} = personalSlice.actions;
export default personalSlice.reducer;
