import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  login: [],
  isLoading: false,
  error: null,
};

// export const __loginThunk = createAsyncThunk(
//   'LOGIN',
//   async (payload, thunkAPI) => {
//     console.log('로그인할거야' + payload.loginId);
//     console.log('로그인할거야' + payload.password);

//     try {
//       axios.get('http://localhost:3001/login', payload);
//       return thunkAPI.fulfillWithValue(payload);
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

// export const __getLogin = createAsyncThunk(
//   'getLogin',
//   async (payload, thunkAPI) => {
//     try {
//       const data = await axios.get('http://localhost:3001/login');
//       console.log(data);
//       return thunkAPI.fulfillWithValue(data.data);
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

// export const __postLogin = createAsyncThunk(
//   'GETLOGIN',
//   async (payload, thunkAPI) => {
//     try {
//       const data = await axios.post('http://localhost:3001/login');
//       console.log(data);
//       return thunkAPI.fulfillWithValue(data.data);
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

export const __postAddLogin = createAsyncThunk(
  'postAddLogin',
  async (payload, thunkAPI) => {
    try {
      //console.log(payload);
      axios.post('http://localhost:3001/login', payload);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: {
    // [__loginThunk.pending]: (state) => {
    //   state.isLoading = true;
    // },
    // [__loginThunk.fulfilled]: (state, action) => {
    //   state.isLoading = false;
    //   state.login = action.payload;
    // },
    // [__loginThunk.rejected]: (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },

    //
    [__postAddLogin.pending]: (state) => {
      state.isLoading = true;
    },
    [__postAddLogin.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.movies = action.payload;
    },
    [__postAddLogin.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {} = loginSlice.actions;
export default loginSlice.reducer;
