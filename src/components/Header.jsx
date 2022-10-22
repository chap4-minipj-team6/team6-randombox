import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
  const navigate = useNavigate();
  return (
    <HeaderContainer>
      <button
        onClick={() => {
          navigate('/Mainpage');
        }}
      >
        홈
      </button>
      <Stdiv>
        <p>상품요청</p>
        <p>리뷰작성</p>
        <p>마이페이지</p>
        <div>
          <p>유저이름</p>
          <p>잔여포인트 : 5000P</p>
        </div>
      </Stdiv>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  background-color: #ffdbaf;
  display: flex;
  justify-content: space-between;

  height: 100px;
  > button {
    height: 30px;
  }
`;

const Stdiv = styled.div`
  display: flex;
  > p {
    margin-right: 20px;
  }
`;
