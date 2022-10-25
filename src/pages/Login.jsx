import React, { useRef, useCallback } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../element/Button';
import { useCookies } from 'react-cookie'; // useCookies import
import { RandomsApi } from '../tools/instance';
import useInput from '../hooks/useInput';

const Login = () => {
  const [loginid, onChangeId] = useInput('');
  const [loginpwd, onChangePwd] = useInput('');

  const formRef = useRef();
  const [tokens, setTokens] = useCookies(['token']); // 쿠키 훅
  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();
    RandomsApi.login({
      id: formRef.current.id.value,
      password: formRef.current.password.value,
    }).then((res) => {
      setTokens('token', res.data.token); // 쿠키(token이라는 이름의)에 토큰 저장
      alert(res.data.message);
      navigate('/Mainpage');
    });
  };

  return (
    <StBody>
      <StContainer>
        <StWrap>
          <h1>로그인</h1>
          <form ref={formRef} onSubmit={login}>
            <div>
              <div>
                <Stinput
                  placeholder="아이디를 입력하세요."
                  id="id"
                  //name="id"
                  type="text"
                  minLength="1"
                  value={loginid}
                  onChange={onChangeId}
                />
              </div>
              <div>
                <Stinput
                  placeholder="비밀번호를 입력하세요."
                  id="password"
                  //name="password"
                  type="password"
                  minLength="3"
                  value={loginpwd}
                  onChange={onChangePwd}
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
  font-family: 'MonoplexKR-Regular';
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
