import React, { useState } from 'react';
//import { useCallback } from 'react';
import { Link } from 'react-router-dom';
//import useInput from '../hooks/useInput';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../element/Button';
import { useDispatch } from 'react-redux';
//import { __loginThunk } from '../redux/modules/loginSlice';
import { __postAddLogin } from '../redux/modules/loginSlice';
//import { useEffect } from 'react';
// import useInput from '../hooks/useInput';

const Login = () => {
  // const [id, onChangeId, setId] = useInput('');
  // const [pwd, onChangePwd, setPwd] = useInput('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, setLogin] = useState({
    id: '',
    password: '',
  });

  // const onLoginTest = () => {
  //   var _id = document.getElementById('loginID').value;
  //   var _pw = document.getElementById('loginPassword').value;
  //   console.log('input ID 값 : ' + _id);
  //   console.log('input PW 값 : ' + _pw);

  //   setLogin({
  //     ...login,
  //     id: _id,
  //   });
  //   setLogin({
  //     ...login,
  //     password: _pw,
  //   });
  // };

  const onLoginHandler = (e) => {
    console.log('매개변수 받은 값 : ' + login.id);
    console.log('매개변수 받은 값 : ' + login.password);
    if (!login.id || !login.password) {
      alert('모든 값을 정확하게 입력해주세요');
      return;
    }
    dispatch(__postAddLogin(login));
    navigate('/Mainpage');
  };

  // useEffect(() => {
  //   dispatch(__getLogin());
  // }, [dispatch]);

  return (
    <StBody>
      <StContainer>
        <StWrap>
          <h1>로그인</h1>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              onLoginHandler(login);
            }}
          >
            <div>
              <div>
                <Stinput
                  placeholder="아이디를 입력하세요."
                  id="loginID"
                  minLength="1"
                  type="text"
                  onChange={(ev) => {
                    const { value } = ev.target;
                    setLogin({
                      ...login,
                      id: value,
                    });
                  }}
                />
              </div>
              <div>
                <Stinput
                  placeholder="비밀번호를 입력하세요."
                  id="loginPassword"
                  minLength="3"
                  type="password"
                  onChange={(ev) => {
                    const { value } = ev.target;
                    setLogin({
                      ...login,
                      password: value,
                    });
                  }}
                />
              </div>
            </div>
            <Button size="md" type="submit">
              로그인
            </Button>
          </form>
          <BtContain>
            <Link to="/signUp">
              <Button size="md">회원가입</Button>
            </Link>
          </BtContain>
          <Link to="/passwordEdit" style={{ textDecoration: 'none' }}>
            <Stp> 비밀번호를 잊어버리셨나요?</Stp>
          </Link>
        </StWrap>
      </StContainer>
    </StBody>
  );
};
export default Login;

const StBody = styled.div`
  background: #f6f5f7;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  margin: -20px 0 50px;
`;
const StContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 400px;
  max-width: 100%;
  min-height: 480px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px #0000003f, 0 10px 10px #00000038;
  position: relative;
  overflow: hidden;
  border: none;
`;

const StWrap = styled.div`
  > h1 {
    font-weight: bold;
  }

  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  text-align: center;
`;

const Stinput = styled.input`
  background-color: #eee;
  border: none;
  padding: 12px 15px;
  margin: 8px 0 30px 0;
  width: 100%;
  min-width: 300px;
  font-family: 'LeferiPoint-WhiteObliqueA';
`;

const BtContain = styled.div`
  margin-bottom: 30px;
  margin-top: 10px;
`;

const Stp = styled.p`
  color: #626262;
  font-size: 14px;
  text-decoration: none;
  margin: 15px 0;
  font-family: 'LeferiPoint-WhiteObliqueA';
`;
