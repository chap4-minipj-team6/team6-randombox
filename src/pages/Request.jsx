import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';

const Request = () => {
  return (
    <div>
      <Header />
      <WannaBox>원하는 상품을 입력해주세요</WannaBox>
      <Form>
        <InputWrap>
          <Input type="text" />
          <Button>요청하기</Button>
        </InputWrap>
      </Form>
    </div>
  );
};

export default Request;

const WannaBox = styled.div`
  width: 600px;
  margin: 40px auto;
  padding: 30px;

  border-radius: 30px;

  text-align: center;
  font-weight: bold;
  background-color: #fcd19c;
`;

const Form = styled.form`
  width: 80%;
  margin: 0 auto;
  outline: none;
`;

const InputWrap = styled.div`
  margin: 0 auto;

  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  width: 40%;
  height: 40px;
  margin-left: 26%;

  border-radius: 20px;
  border: 1px solid white;

  font-size: 20px;
  background-color: #ffefc1;

  &:focus {
    background-color: rgba(0, 0, 0, 0.3, #fff);
    color: black;
    border: none;
    outline: none;
  }
`;

const Button = styled.button`
  float: right;
  padding: 12px;
  justify-content: center;
  align-items: center;

  border: none;
  border-radius: 20px;

  margin-right: 26%;

  background-color: #ffefc1;

  &:hover {
    background-color: #fcd19c;
    cursor: pointer;
  }
`;
