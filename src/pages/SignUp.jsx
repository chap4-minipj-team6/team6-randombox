import React from 'react';
import useInput from '../myhook/useInput';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [info, onChangeValue, reset] = useInput({
    userId: '',
    username: '',
    userPw: '',
    userPw_02: '',
    address: '',
    point: '',
  });
  const navigate = useNavigate();

  return (
    <SignUpBox>
      <H1>회원가입</H1>
      <Form>
        <SignUpSet>
          <Label htmlFor="">아이디</Label>
          <SignInput
            type="text"
            name="userId"
            value={info.userId}
            onChange={onChangeValue}
          />
          <Label htmlFor="">닉네임</Label>
          <SignInput
            type="name"
            name="userName"
            value={info.userName}
            onChange={onChangeValue}
          />
          <Label htmlFor="">비밀번호</Label>
          <SignInput
            type="text"
            name="userPw"
            value={info.userPw}
            onChange={onChangeValue}
          />
          <Label htmlFor="">비밀번호 확인</Label>
          <SignInput
            type="text"
            name="userPw_02"
            value={info.userPw_02}
            onChange={onChangeValue}
          />
          <Label htmlFor="">배송주소</Label>
          <SignAddrInput
            type="address"
            name="address"
            value={info.address}
            onChange={onChangeValue}
          />
          <SavePoint>
            소유한 포인트 : <span>0000</span>
          </SavePoint>
        </SignUpSet>
        <SignButton
          onClick={() => {
            navigate('/Mainpage');
          }}
        >
          가입완료
        </SignButton>
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
const Form = styled.div`
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

const SignButton = styled.button`
  width: inherit;
  border: 1px solid black;
  border-radius: 5px;

  margin: 0 auto;

  padding: 8px;
  border: 1px solid #ffd372;
  background-color: #ffd372;
`;

// const BgBox = styled.div`
//   width: 100%;
//   height: 100%;
//   position: absolute;
//   z-index: -100;
//   background-color: rgba(0, 0, 0, 0.2);
// `;
