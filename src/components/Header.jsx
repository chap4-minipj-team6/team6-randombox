import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
// import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import jwt_decode from 'jwt-decode';
import { RandomsApi } from '../tools/instance';

const Header = () => {
  const navigate = useNavigate();
  const [tokens, setTokens, removeCookie] = useCookies(['token']);
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
      <StGnbBox>
        <StTitle
          onClick={() => {
            navigate('/Mainpage');
          }}
        >
          RANDOMBOX
        </StTitle>
        <Stdiv>
          <StGnb>
            <Username>닉네임: {users.nickname}</Username>
            <Point>
              <P>잔여포인트 : {users.point}</P>
            </Point>
          </StGnb>
        </Stdiv>
      </StGnbBox>
      <Nav>
        <MenuWrap>
          <Homebutton
            onClick={() => {
              removeCookie('token');
              navigate('/');
            }}
          >
            로그아웃
          </Homebutton>
          <MenuBox>
            {/* <Menu>
              <div
                onClick={() => {
                  navigate(`/Request`);
                }}
              >
                상품요청
              </div>
            </Menu> */}
            {/* <Menu>
              <div
                onClick={() => {
                  navigate(`/Review`);
                }}
              >
                리뷰작성
              </div>
            </Menu> */}
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

const StTitle = styled.div`
  cursor: pointer;
  font-size: 50px;
  font-family: 'OKDDUNG';
  color: #4c999d;

  text-align: center;
`;

const Stdiv = styled.div`
  width: 100%;
`;

const HeaderWrap = styled.div`
  height: 100%;
  width: inherit;
  display: flex;
  flex-direction: column;
`;

const StGnbBox = styled.div`
  width: 100%;
  //height: 40px;
  //flex-direction: row;
  //justify-content: center;
  // align-items: center;
  padding: 30px 10px 20px 10px;
  display: flex;
  flex-direction: column;
`;

const StGnb = styled.div`
  width: 80%;
  height: 5px;
  margin: 0 auto;
  flex-direction: row;
  padding: 30px;
  border-radius: 30px;
  //background-color: #d9b343;
  display: flex;
  align-items: center;
`;

const Nav = styled.div`
  width: 80%;
  margin: 0 auto;
  flex-direction: row;
  padding: 30px;
  border-radius: 30px;
  background-color: #ffefc1;
  box-shadow: 0 3px 6px 0 #fea528;
`;

const Username = styled.div`
  //margin-left: 5%;
  width: 200px;
  font-family: 'Binggrae-Two';
  margin-left: 60%;
  font-size: 18px;
`;

const Point = styled.div`
  //float: right;
  // width: 100%;
  display: flex;
`;

const P = styled.div`
  //text-align: right;
  font-family: 'Binggrae-Two';
  width: 200px;
  font-size: 18px;
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
  border: none;
  /* border: 1px solid #fea528; */
  box-shadow: 0 2px 6px 0 #fea528;

  padding: 5px;
  border-radius: 10px;

  font-weight: bold;
  font-size: 16px;

  cursor: pointer;
  background-color: #ffefc1;
  &:hover {
    background-color: #fea528;
    box-shadow: none;
    color: white;
  }
`;
