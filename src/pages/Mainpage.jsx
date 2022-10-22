import React from 'react';
import styled from 'styled-components';
// import { FcHome } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../style/style.css';

const Header = () => {
  const navigate = useNavigate();

  return (
    <HeaderWrap>
      <GnbBox>
        <Gnb>
          <Username>유저이름</Username>
          <Point>
            <P>
              잔여포인트 : <span>5000P</span>
            </P>
          </Point>
        </Gnb>
      </GnbBox>
      <Nav>
        <MenuWrap>
          <Homebutton
            onClick={() => {
              navigate('/Mainpage');
            }}
          >
            HOME
          </Homebutton>
          <MenuBox>
            <Menu>
              <Link to="/Request">상품요청</Link>
            </Menu>
            <Menu>
              <Link to="/Review">리뷰작성</Link>
            </Menu>
            <Menu>
              <Link to="/MyPage">마이페이지</Link>
            </Menu>
          </MenuBox>
        </MenuWrap>
      </Nav>
    </HeaderWrap>
  );
};

const MyPage = () => {
  return (
    <div>
      <Header />
      <div>
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

//헤더
const HeaderWrap = styled.div`
  width: inherit;
`;

const GnbBox = styled.div`
  width: 100%;
  height: 40px;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 30px 0px 20px 0;
`;

const Gnb = styled.div`
  float: right;
  width: 300px;

  display: flex;
  flex-direction: row;

  border-radius: 10px;

  gap: 10px;
`;

const Nav = styled.div`
  width: inherit;

  flex-direction: row;

  padding: 30px;
  border-radius: 30px;
  background-color: #ffefc1;
`;

const Username = styled.div`
  margin-right: 10%;
`;

const Point = styled.div`
  float: right;
  width: 150px;
  display: flex;

  margin-right: 10px;
`;

const P = styled.div`
  text-align: right;
`;
const MenuBox = styled.div`
  float: right;
  gap: 20px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const MenuWrap = styled.div`
  /* margin-right: 0 30px 20px 0; */
  justify-content: center;
`;

const Menu = styled.div`
  float: left;
  padding: 10px 10px;

  border-radius: 10px;

  border: 2px solid #fea528;
  &:hover {
    background-color: #fea528;
    color: white;
  }
`;

const Homebutton = styled.button`
  width: 80px;
  text-align: center;

  padding: 5px;
  border-radius: 10px;

  font-weight: bold;
  font-size: 1.2rem;

  cursor: pointer;
  background-color: #ffefc1;
`;
