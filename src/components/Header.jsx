import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
// import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import jwt_decode from 'jwt-decode';
import { RandomsApi } from '../tools/instance';

const Header = () => {
  const navigate = useNavigate();
  const [tokens, setTokens] = useCookies(['token']);
  const accesstoken = jwt_decode(tokens.token);
  const userId = accesstoken.userId;
  const [users, setUsers] = useState([]);

  useEffect(() => {
    RandomsApi.header().then((res) => {
      //console.log(res);
      setUsers(res.data.data);
    });
  }, []);

  return (
    <HeaderWrap>
      <GnbBox>
        <Gnb>
          <Username>닉네임: {users.nickname}</Username>
          <Point>
            <P>
              잔여포인트 : <span>{users.point}</span>P
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
              <div
                onClick={() => {
                  navigate(`/Request`);
                }}
              >
                상품요청
              </div>
            </Menu>
            <Menu>
              <div
                onClick={() => {
                  navigate(`/Review`);
                }}
              >
                리뷰작성
              </div>
            </Menu>
            <Menu>
              <div
                onClick={() => {
                  navigate(`/MyPage/${userId}`);
                }}
              >
                마이페이지
              </div>
            </Menu>
          </MenuBox>
        </MenuWrap>
      </Nav>
    </HeaderWrap>
  );
};
<div></div>;

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
  margin-bottom: 40px;
  padding: 30px 0px 20px 0;
`;

const Gnb = styled.div`
  float: right;
  width: 300px;

  display: flex;
  flex-direction: row;
  justify-content: center;

  padding: 10px;
  margin-right: 10%;

  border-radius: 10px;
  box-shadow: 0 2px 5px 0 #fcd19c;

  gap: 10px;
`;

const Nav = styled.div`
  width: 80%;

  margin: 0 auto;

  flex-direction: row;

  padding: 30px;
  border-radius: 30px;
  background-color: #ffefc1;
  &:hover {
    box-shadow: 0 3px 6px 0 #fea528;
  }
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
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Menu = styled.div`
  float: left;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 10px;

  /* border: 1px solid #fea528; */
  &:hover {
    background-color: #fea528;
    box-shadow: none;
    color: white;
  }
  box-shadow: 0 2px 6px 0 #fea528;

  font-weight: bold;
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
