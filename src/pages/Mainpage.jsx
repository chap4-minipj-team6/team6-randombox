import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import jwt_decode from 'jwt-decode';

const MyPage = () => {
  const navigate = useNavigate();

  const [tokens, setTokens] = useCookies(['token']);
  const accesstoken = jwt_decode(tokens.token);
  const userId = accesstoken.userId;

  const openbox = () => {
    const result = window.confirm(
      '상품을 획득했습니다! \n마이페이지에서 확인하세요.'
    );
    navigate(`/MyPage/${userId}`);

    if (result) {
      navigate(`/MyPage/${userId}`);
    } else {
      return;
    }
  };

  return (
    <div>
      <Header />
      <Stwrap>
        {/* 오픈버튼을 클릭하기 전에 이 이미지가 뜨고 클릭후  */}
        <ImgWrap>
          <Img
            src="https://src.wizad.co.kr/wizbbs/data/shopimg/A1563523810533_p1.png"
            alt="randomBox"
            onClick={openbox}
          />
        </ImgWrap>
        <Stp>🎁 상자를 눌러 열어주세요!</Stp>
      </Stwrap>
    </div>
  );
};

export default MyPage;

const Stwrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Stp = styled.div`
  font-size: 30px;
`;
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
    cursor: pointer;
  }
`;

// const OpenBtn = styled.button`
//   position: absolute;
//   z-index: 100;
//   top: 50%;
//   left: 42%;
//   width: 100px;
//   height: 50px;

//   border: none;
//   border-radius: 20px;
//   cursor: pointer;

//   &:hover {
//     background-color: black;
//     color: white;
//   }
// `;
