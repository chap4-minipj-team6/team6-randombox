import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import jwt_decode from 'jwt-decode';
import Header from '../components/Header';
import styled from 'styled-components';
import { RandomsApi } from '../tools/instance';
import Layout from '../components/Layout';

const Mainpage = () => {
  const [tokens, setTokens] = useCookies(['token']);
  const accesstoken = jwt_decode(tokens.token);
  const userId = accesstoken.userID;
  const navigate = useNavigate();

  useEffect(() => {
    //window.location.replace('/Mainpage');
  }, []);

  const openbox = () => {
    RandomsApi.boxopen({})
      .then((res) => {
        window.confirm('상품을 획득했습니다! \n마이페이지에서 확인하세요.');
        // alert(res);
        navigate(`/MyPage/${userId}`);
      })
      .catch((error) => {
        alert(error.response.data.errorMessage);
        return;
      });
  };

  return (
    <div>
      <Layout>
        <Stwrap>
          {/* 오픈버튼을 클릭하기 전에 이 이미지가 뜨고 클릭후  */}
          <ImgWrap>
            <Img
              src="https://malrang.kr/web/product/big/20200618/30d910d5ca8af4791b8f4a5e43144de8.jpg"
              alt="randomBox"
              onClick={openbox}
            />
          </ImgWrap>
          <Stp>🎁 상자를 눌러 열어주세요!</Stp>
          <Stpp>5000포인트 차감됩니다.</Stpp>
        </Stwrap>
      </Layout>
    </div>
  );
};

export default Mainpage;

const Stwrap = styled.div`
  min-height: 800px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 1200px;
`;

const Stp = styled.div`
  font-size: 30px;
  color: #e95970;
`;
const Stpp = styled.div`
  font-size: 30px;
  color: #ebb255;
`;
const ImgWrap = styled.div`
  width: 30%;
  height: 30%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 70px auto;
  /* margin: 10% auto 0 35%; */
`;

const Img = styled.img`
  width: 150%;
  height: 150%;
  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;
