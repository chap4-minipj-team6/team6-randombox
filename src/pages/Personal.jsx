import React from 'react';
import styled from 'styled-components';
import Button from '../element/Button';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import axios from 'axios';
import { RandomsApi } from '../tools/instance';

const Personal = () => {
  const navigate = useNavigate();

  const [data, setData] = useState([]);

  const initialState = {
    nickname: '',
    password: '',
    confirm: '',
    email: '',
    address: '',
  };
  const [personal, setPersonal] = useState(initialState);

  const onPersonalHandler = (e) => {
    RandomsApi.personal().then((res) => {
      setData(res.data);
      alert(res.data.message);
      setPersonal(initialState);
    });
  };

  return (
    <div>
      <StBody>
        <StContainer>
          <StWrap>
            <Stxbutton onClick={() => navigate(-1)}>❌</Stxbutton>
            <h1>개인정보 수정</h1>
            <p>{data.message}</p>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                onPersonalHandler(personal);
              }}
            >
              <Stbox>
                <p>닉네임 </p>
                <Stinput
                  onChange={(ev) => {
                    const { value } = ev.target;
                    setPersonal({
                      ...personal,
                      nickname: value,
                    });
                  }}
                  placeholder="수정할 닉네임을 입력하세요."
                ></Stinput>
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
                  placeholder="수정할 이메일을 입력하세요."
                ></Stinput>
              </Stbox>
              <Stbox>
                <p>주소 </p>
                <Stinput
                  onChange={(ev) => {
                    const { value } = ev.target;
                    setPersonal({
                      ...personal,
                      address: value,
                    });
                  }}
                  placeholder="수정할 주소를 입력하세요."
                ></Stinput>
              </Stbox>
              <Button size="md">수정 완료 </Button>
            </form>
          </StWrap>
        </StContainer>
      </StBody>
    </div>
  );
};

export default Personal;
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
`;

const Stxbutton = styled.div`
  margin-top: 10px;
  display: flex;
  margin-left: 340px;
  cursor: pointer;
`;
