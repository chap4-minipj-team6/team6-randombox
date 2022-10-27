import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';
import { RandomsApi } from '../../tools/instance';

//Thunk 함수

export const __addBtn = createAsyncThunk(
  'addBtn',
  async (payload, thunkAPI) => {
    try {
      const { data } = await RandomsApi.postSignUps(payload);

      // .then((res) => console.log(res))
      // .catch((err) => console.log(err));

      // // const { data } = await axios.post(url, payload)

      // const data = RandomsApi.postSignUps(payload);

      return thunkAPI.fulfillWithValue(data);
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const __checkBtn = createAsyncThunk();

//initialState
const initialState = {
  infos: [],
  isLoading: false,
  isSuccess: false,
  error: {},
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

      if (state.infos.ok === true) {
        alert('회원가입 성공!');
        window.location.href = '/';
      }
    },

    [__addBtn.rejected]: (state, action) => {
      //에러가 발생했지만, 네트워크 요청이 끝났으니,
      //false로 변경
      state.isLoading = false;
      //catch 된 error 객체를 state.error에 넣어.
      state.error = action.payload;
      const statusCode = state.error.response.status;
      const errorMsg = state.error.response.data.errorMessage;
      statusCode === 412 ? (
        alert('회원가입 실패! 다시 한 번 확인해주세요!')
      ) : (
        <></>
      );
      statusCode === 412 && errorMsg === '중복된 닉네임입니다.' ? (
        alert('중복된 닉네임입니다.')
      ) : (
        <></>
      );
      statusCode === 412 && errorMsg === '패스워드가 일치하지 않습니다.' ? (
        alert('패스워드가 일치하지 않습니다.')
      ) : (
        <></>
      );
      statusCode === 412 &&
      errorMsg === '패스워드에 닉네임이 포함되어 있습니다.' ? (
        alert('패스워드에 닉네임이 포함되어 있습니다.')
      ) : (
        <></>
      );
    },
  },
});

export const { addBtn, completeSign } = signUpSlice.actions;
export default signUpSlice.reducer;
