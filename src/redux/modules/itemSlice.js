import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { RandomsApi } from '../../tools/instance';

const initialState = {
  items: [],
  updatedComment: [],
  isLoading: false,
  error: null,
};

//GET
export const __getItems = createAsyncThunk(
  'GET_ITEMS',
  async (payload, thunkAPI) => {
    try {
      const { data } = await RandomsApi.item(payload);
      //console.log('데이터', data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//DELETE
export const __deleteItems = createAsyncThunk(
  'DELETE_ITEMS',
  async (payload, thunkAPI) => {
    try {
      await RandomsApi.itemdelete(payload);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const ItemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {},
  extraReducers: {
    //GET
    [__getItems.pending]: (state) => {
      state.isLoading = true;
    },
    [__getItems.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.items = action.payload;
    },
    [__getItems.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    //DELETE
    [__deleteItems.pending]: (state) => {
      state.isLoading = true;
    },
    [__deleteItems.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    [__deleteItems.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {} = ItemsSlice.actions;
export default ItemsSlice.reducer;
