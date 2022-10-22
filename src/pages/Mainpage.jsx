import React from "react";
import styled from "styled-components";
// import { FcHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div>
      <ul>
        <li>유저이름</li>
        <li>
          잔여포인트 : <span>5000P</span>
        </li>
      </ul>
      <Homebutton
        onClick={() => {
          navigate("/Mainpage");
        }}
      >
        홈
      </Homebutton>
      <ul>
        <li>상품요청</li>
        <li>리뷰작성</li>
        <li>마이페이지</li>
      </ul>
    </div>
  );
};

const MyPage = () => {
  return (
    <div>
      <Header />
    </div>
  );
};

export default MyPage;

const Homebutton = styled.button`
  text-align: center;
  background-color: lightyellow;
`;
