import React from 'react';
import styled from 'styled-components';
import Button from '../element/Button';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import axios from 'axios';
import { RandomsApi } from '../tools/instance';

const PasswordEdit = () => {
  const navigate = useNavigate();

  const [data, setData] = useState([]);

  const initialState = {
    id: '',
    password: '',
    confirm: '',
    email: '',
  };
  const [personal, setPersonal] = useState(initialState);

  //console.log(personal);

  const onPersonalHandler = (e) => {
    personal.id === '' ? alert('아이디를 입력하세요!') : <></>;
    if (
      personal.id === '' ||
      personal.password === '' ||
      personal.confirm === '' ||
      personal.email === ''
    ) {
      return alert('모든 항목을 입력해주세요');
    } else {
      console.log('클릭', personal);
      RandomsApi.password({
        id: personal.id,
        password: personal.password,
        confirm: personal.confirm,
        email: personal.email,
      })
        .then((res) => {
          alert(res.data.message);
          setPersonal(initialState);
          navigate(-1);
        })
        .catch((error) => {
          alert('잘못된 값을 입력하셨습니다.');
        });
    }
  };

  return (
    <div>
      <StBody>
        <StContainer>
          <StWrap>
            <Stxbutton onClick={() => navigate(-1)}>❌</Stxbutton>
            <h1>비밀번호 찾기</h1>
            <p>{data.message}</p>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                onPersonalHandler(personal);
              }}
            >
              <Stbox>
                <p>아이디 </p>
                <Stinput
                  onChange={(ev) => {
                    const { value } = ev.target;
                    setPersonal({
                      ...personal,
                      id: value,
                    });
                  }}
                  placeholder="아이디를 입력하세요."
                ></Stinput>
                {personal.id.length === 0 ? (
                  <div></div>
                ) : personal.id.length <= 2 || personal.id.length >= 11 ? (
                  <ErrorMessage>
                    아이디는 대,소문자 또는 숫자를 포함한 3자 이상 10글자 이하로
                    적어주세요
                  </ErrorMessage>
                ) : (
                  <div></div>
                )}
              </Stbox>
              <Stbox>
                <p>비밀번호 </p>
                <Stinput
                  onChange={(ev) => {
                    const { value } = ev.target;
                    setPersonal({
                      ...personal,
                      password: value,
                    });
                  }}
                  placeholder="수정할 비밀번호를 입력하세요."
                ></Stinput>
                {personal.password.length === 0 ? (
                  <div></div>
                ) : personal.password
                    .replace(' ', '')
                    .includes(personal.nickname) ? (
                  <ErrorMessage>
                    패스워드에 닉네임이 포함되어있습니다.
                  </ErrorMessage>
                ) : personal.password.length <= 3 ||
                  personal.password.length >= 30 ? (
                  <ErrorMessage>
                    비밀번호는 대,소문자 또는 숫자를 포함한 4자 이상 30글자
                    이하로 적어주세요
                  </ErrorMessage>
                ) : (
                  <></>
                )}
              </Stbox>
              <Stbox>
                <p>비밀번호 확인 </p>
                <Stinput
                  onChange={(ev) => {
                    const { value } = ev.target;
                    setPersonal({
                      ...personal,
                      confirm: value,
                    });
                  }}
                  placeholder="비밀번호를 다시 한번 입력해주세요."
                ></Stinput>
                {personal.password.length === 0 ? (
                  <div></div>
                ) : personal.password !== personal.confirm ? (
                  <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>
                ) : (
                  <div></div>
                )}
              </Stbox>
              <Stbox>
                <p>이메일 </p>
                <Stinput
                  onChange={(ev) => {
                    const { value } = ev.target;
                    setPersonal({
                      ...personal,
                      email: value,
                    });
                  }}
                  placeholder="이메일을 입력하세요."
                ></Stinput>
                {personal.email.length === 0 ? (
                  <div></div>
                ) : !personal.email.includes('@') ||
                  !personal.email.includes('.') ? (
                  <ErrorMessage>
                    @를 포함한 정상적인 이메일을 써주세요.
                  </ErrorMessage>
                ) : (
                  <div></div>
                )}
              </Stbox>
              <Button size="md">변경하기 </Button>
            </form>
          </StWrap>
        </StContainer>
      </StBody>
    </div>
  );
};

export default PasswordEdit;
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
  min-height: 850px;
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
  > p {
    color: red;
    font-family: 'LeferiPoint-WhiteObliqueA';
  }
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px 10px 50px;
  height: 100%;
  text-align: center;
`;
const Stbox = styled.div`
  border: 1px solid #9c9c9c38;
  border-radius: 10px;
  margin-bottom: 10px;
  padding: 0 10px 0px 10px;
  > p {
    text-align: left;
  }
`;
const Stinput = styled.input`
  font-family: 'LeferiPoint-WhiteObliqueA';
  background-color: #eee;
  border: none;
  padding: 12px 15px;
  margin: 0px 0 20px 0;
  width: 100%;
  min-width: 300px;
  font-family: 'MonoplexKR-Regular';
`;

const Stxbutton = styled.div`
  margin-top: 10px;
  display: flex;
  margin-left: 340px;
  cursor: pointer;
`;
const ErrorMessage = styled.div`
  color: red;
  font-size: 0.8rem;
  font-family: 'MonoplexKR-Regular';
`;
