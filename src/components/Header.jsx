import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <HeaderWrap>
      <GnbBox>
        <Gnb>
          <Username>유저이름</Username>
          <Point>
            <P>
              잔여포인트 : <span>5000</span>P
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

export default Header;

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
  width: 250px;

  display: flex;
  flex-direction: row;

  padding: 10px;
  margin-right: 2%;

  border-radius: 10px;
  box-shadow: 0 2px 5px 0 #fcd19c;

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
  margin-right: 5%;
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

  border: 1px solid #fea528;
  &:hover {
    background-color: #fea528;
    box-shadow: none;
    color: white;
  }
  box-shadow: 0 3px 3px 0 #fea528;
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
