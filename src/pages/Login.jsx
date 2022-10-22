import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [info, SetInfo] = useState({
    username: "",
    title: "",
    body: "",
  });
  const [value, SetValue] = useState();
  const navigate = useNavigate();
  // useEffect(() => {
  //   if (!isSuccess) {
  //     return;
  //   }
  //   if (isSuccess) {
  //     return navigate("/Mainpage");
  //   }
  //   return () => dispatch(completeTodo());
  // }, [dispatch, isSuccess, navigate]);

  const onChangeValue = (e) => {
    const { name, value } = e.target;
    SetValue({ ...info, [name]: value });
  };

  return (
    <LoginBox>
      <h1>로그인</h1>
      <form>
        <LoginSet>
          <label htmlFor="">아이디</label>
          <input
            type="text"
            name="userId"
            value={info.userId}
            onChange={onChangeValue}
          />
          <label htmlFor="">비밀번호</label>
          <input
            type="password"
            name="password"
            value={info.value}
            onChange={onChangeValue}
          />
        </LoginSet>
        <button>로그인</button>
        <button
          onClick={() => {
            navigate("/SignUp");
          }}
        >
          회원가입
        </button>
      </form>
    </LoginBox>
  );
};

export default Login;

const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: lightyellow;
`;

const LoginSet = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 10px;
`;
