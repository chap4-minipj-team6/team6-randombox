import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [info, SetInfo] = useState({
    userId: "",
    username: "",
    userPw: "",
    userPw_02: "",
    address: "",
    point: "",
  });
  const [value, SetValue] = useState();
  const navigate = useNavigate();

  const onChangeValue = (e) => {
    const { name, value } = e.target;
    SetValue({ ...info, [name]: value });
  };
  return (
    <SignUpBox>
      <h1>회원가입</h1>
      <form>
        <SignUpSet>
          <label htmlFor="">아이디</label>
          <SignInput
            type="text"
            name="userId"
            value={info.value}
            onChange={onChangeValue}
          />
          <label htmlFor="">닉네임</label>
          <SignInput
            type="name"
            name="userName"
            value={info.userName}
            onChange={onChangeValue}
          />
          <label htmlFor="">비밀번호</label>
          <SignInput
            type="password"
            name="userPw"
            value={info.userPw}
            onChange={onChangeValue}
          />
          <label htmlFor="">비밀번호 확인</label>
          <SignInput
            type="password"
            name="userPw_02"
            value={info.userPw_02}
            onChange={onChangeValue}
          />
          <label htmlFor="">배송주소</label>
          <SignaddrInput
            type="address"
            name="address"
            value={info.address}
            onChange={onChangeValue}
          />
          <SavePoint>
            소유한 포인트 : <span>0000</span>P
          </SavePoint>
        </SignUpSet>
        <SignButton
          onClick={() => {
            navigate("/Mainpage");
          }}
        >
          가입완료
        </SignButton>
      </form>
    </SignUpBox>
  );
};

export default SignUp;

const SignUpBox = styled.div`
  width: 400px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 25% auto;
  padding-bottom: 30px;

  border-radius: 30px;
  background-color: lightyellow;
`;

const SignUpSet = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 10px;
`;

const SignInput = styled.input`
  height: 24px;
  border: 1px solid black;
  border-radius: 4px;
`;

const SignaddrInput = styled.textarea`
  border: 1px solid black;
  border-radius: 4px;
`;

const SignButton = styled.button`
  border: 1px solid black;
  border-radius: 5px;

  margin: 10px 0 0 28%;

  padding: 8px;
  border: 1px solid #ffd372;
  background-color: #ffd372;
`;

const SavePoint = styled.div`
  margin-top: 10px;
`;
