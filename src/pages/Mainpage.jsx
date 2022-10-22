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
            홈
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
      <div></div>
    </div>
  );
};

export default MyPage;

const HeaderWrap = styled.div`
  width: inherit;
`;

const GnbBox = styled.div`
  width: 100%;
  height: 40px;

  padding: 20px;
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

  padding: 20px;
  border-radius: 10px;
  background-color: #ffd372;
`;

const Username = styled.div`
  margin-right: 20%;
`;

const Point = styled.div`
  float: right;
  width: 150px;
  display: flex;
`;

const P = styled.div`
  text-align: right;
`;
const MenuBox = styled.div`
  float: right;
  gap: 10px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const MenuWrap = styled.div``;

const Menu = styled.div`
  float: left;
  padding: 0 10px;

  border: 3px solid #ffcd29;
`;
const Homebutton = styled.button`
  text-align: center;
  background-color: lightyellow;
`;
