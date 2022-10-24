import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { __addBtn } from '../redux/modules/signUpSlice';
// import { completeSign, __addBtn } from '../redux/modules/signUpSlice';
import { useDispatch } from 'react-redux';
import useInput from '../myhook/useInput';
import Button from '../element/commonBtn';

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const isSuccess = useSelector((state) => state.signUpS);
  // const { isLoading, error } = useSelector((state) => state.signUpS);

  const [info, onChangeValue, reset] = useInput({
    id: '',
    nickname: '',
    password: '',
    confirm: '',
    address: '',
    email: '',
  });

  // console.log(info);

  // useEffect(() => {
  //   if (!isSuccess) {
  //     return;
  //   }
  //   if (isSuccess) {
  //     return navigate('/Mainpage');
  //   }
  //   return () => dispatch(completeSign());
  // }, [dispatch, isSuccess, navigate]);

  // if (isLoading) {
  //   return <div>로딩중...</div>;
  // }
  // if (error) return <div>에러가 발생했습니다</div>;

  const onAddBtn = (e) => {
    e.preventDefault();

    if (
      info.id.trim() === '' ||
      info.nickname.trim() === '' ||
      info.password.trim() === '' ||
      info.confirm.trim() === '' ||
      info.address.trim() === '' ||
      info.email.trim() === ''
    ) {
      return alert('모든 항목을 입력해주셔유');
    }

    dispatch(__addBtn(info));
    // console.log(1);
    reset();
    navigate('/Mainpage');
  };

  return (
    <SignUpBox>
      <H1>회원가입</H1>
      <Form onSubmit={onAddBtn}>
        <SignUpSet>
          <Label>아이디</Label>
          <SignInput
            type="text"
            name="id"
            value={info.id}
            onChange={onChangeValue}
          />
          <Label>닉네임</Label>
          <SignInput
            type="name"
            name="nickname"
            value={info.nickname}
            onChange={onChangeValue}
          />
          <Label>비밀번호</Label>
          <SignInput
            type="text"
            name="password"
            value={info.password}
            onChange={onChangeValue}
          />
          <Label>비밀번호 확인</Label>
          <SignInput
            type="text"
            name="confirm"
            value={info.confirm}
            onChange={onChangeValue}
          />
          <Label>이메일</Label>
          <SignInput
            type="email"
            name="email"
            value={info.email}
            onChange={onChangeValue}
          />
          <Label>배송주소</Label>
          <SignAddrInput
            type="text"
            name="address"
            value={info.address}
            onChange={onChangeValue}
          />
          <SavePoint>
            소유한 포인트 : <span>0000</span>
          </SavePoint>
        </SignUpSet>
        <Button
        // onClick={() => {
        //   navigate('/Mainpage');
        // }}
        >
          가입완료
        </Button>
      </Form>
    </SignUpBox>
  );
};

export default SignUp;

// const SignWrap = styled.div`
//   width: 500px;
//   height: 700px;
//   padding: 10px;
//   border: 1px solid black;
// `;

const SignUpBox = styled.div`
  width: 400px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 25% auto;
  padding: 40px 0 40px 0;

  border-radius: 30px;
  background-color: lightyellow;
`;

const H1 = styled.h1`
  margin: 0 auto 20px auto;
`;
const Form = styled.form`
  width: 250px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SignUpSet = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 10px;
`;

const SignInput = styled.input`
  height: 30px;
  width: 100%;
  border: 1px solid gray;
  border-radius: 4px;
`;

const Label = styled.label`
  width: inherit;
`;

const SignAddrInput = styled.textarea`
  width: 250px;
  border: 1px solid gray;
  border-radius: 4px;
`;

const SavePoint = styled.div`
  width: inherit;
  margin-top: 10px;
`;

// const Button = styled.button`
//   width: inherit;
//   border: 1px solid black;
//   border-radius: 5px;

//   margin: 0 auto;

//   padding: 8px;
//   border: 1px solid #ffd372;
//   background-color: #ffd372;
// `;

// const BgBox = styled.div`
//   width: 100%;
//   height: 100%;
//   position: absolute;
//   z-index: -100;
//   background-color: rgba(0, 0, 0, 0.2);
// `;
