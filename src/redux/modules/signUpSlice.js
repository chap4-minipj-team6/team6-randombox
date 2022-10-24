import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RandomsApi } from '../../tools/instance';

//Thunk 함수
export const __addBtn = createAsyncThunk(
  'addBtn',
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      const { data } = await RandomsApi.postSignUps(payload);
      // const { data } = await axios.post(url, payload)
      console.log(data);
      return thunkAPI.fulfillWithValue(data);
    } catch (err) {
      //error도 하나의 객체.
      return thunkAPI.rejectWithValue(err);
    }
  }
);

//initialState
const initialState = {
  infos: [],
  isLoading: false,
  isSuccess: false,
  error: null,
};

//reducer
const signUpSlice = createSlice({
  name: 'signUp',
  initialState,
  reducers: {
    addBtn: (state, action) => {
      return { info: [...state.infos, action.payload] };
    },
    completeSign: (state, action) => {
      state.isSuccess = false;
    },
  },
  extraReducers: {
    //pending - 대기
    [__addBtn.pending]: (state) => {
      //promise가 fullfilled일때 dispatch.
      //네트워크 요청이 시작되면 로딩상태를 true로 변경.
      state.isLoading = true;
    },
    //
    [__addBtn.fulfilled]: (state, action) => {
      //네트워크 요청이 끝났으니, false로 변경.
      state.isLoading = false;
      //Store에 있는 addtodo서버에서 가져온 infos를 넣어.
      state.infos = action.payload;
    },

    [__addBtn.rejected]: (state, action) => {
      //에러가 발생했지만, 네트워크 요청이 끝났으니,
      //false로 변경
      state.isLoading = false;
      //catch 된 error 객체를 state.error에 넣어.
      state.error = action.payload;
    },
  },
});

export const { addBtn, completeSign } = signUpSlice.actions;
export default signUpSlice.reducer;
