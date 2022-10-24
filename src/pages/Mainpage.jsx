import React from 'react';
import styled from 'styled-components';
import '../style/style.css';
import Header from '../components/Header';

const MyPage = () => {
  return (
    <div>
      <Header />
      <div>
        {/* 오픈버튼을 클릭하기 전에 이 이미지가 뜨고 클릭후  */}
        <ImgWrap>
          <Img
            src="https://src.wizad.co.kr/wizbbs/data/shopimg/A1563523810533_p1.png"
            alt="randomBox"
          />
          <OpenBtn>Open</OpenBtn>
        </ImgWrap>
      </div>
    </div>
  );
};

export default MyPage;

const ImgWrap = styled.div`
  width: 30%;
  height: 30%;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 100px auto;
  /* margin: 10% auto 0 35%; */
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  &:hover {
    opacity: 0.5;
  }
`;

const OpenBtn = styled.button`
  position: absolute;
  z-index: 100;
  top: 50%;
  left: 42%;
  width: 100px;
  height: 50px;

  border: none;
  border-radius: 20px;
  cursor: pointer;

  &:hover {
    background-color: black;
    color: white;
  }
`;
