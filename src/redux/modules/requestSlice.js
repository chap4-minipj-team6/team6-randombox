import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { randomsApi } from '../../mytools/instance';

export const __addBtn = createAsyncThunk(
  'addBtn',
  async (payload, thunkAPI) => {
    try {
      const { data } = await randomsApi.postGoods(payload);
      return thunkAPI.fulfillWithValue(data);
    } catch (err) {
      //error도 하나의 객체.
      return thunkAPI.rejectWithValue(err);
    }
  }
);

const requestSlice = createSlice({
  name: 'reqGoods',
  initialState,
  reducers: {
    addBtn: (state, action) => {
      return { good: [...state.goods, action.payload] };
    },
    completeGood: (state, action) => {
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
      //Store에 있는 addtodo서버에서 가져온 todo를 넣어.
      state.goods.push(action.payload);
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

export const { addBtn, completeGood } = requestSlice.actions;
export default requestSlice.reducer;
