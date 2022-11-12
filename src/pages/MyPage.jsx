import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../element/Button';
import ItemList from '../components/ItemList';
import { RandomsApi } from '../tools/instance';
import { useCookies } from 'react-cookie';
import jwt_decode from 'jwt-decode';

const MyPage = () => {
  const [tokens, setTokens] = useCookies(['token']);
  const accesstoken = jwt_decode(tokens.token);
  const userId = accesstoken.userId;
  const [users, setUsers] = useState([]);

  useEffect(() => {
    //window.location.reload(1);
    //window.location.href;
    //window.location.replace(`/MyPage/${userId}`);
    RandomsApi.mypage()
      .then((res) => {
        setUsers(res.data.data);
        //window.location.reload(true);
      })
      .catch((error) => {
        console.log('마이페이지 겟 에러', error);
      });
  }, []);

  const Alert = () => {
    alert('계좌번호: 신한 111-111-11111 \n관리자 확인 후 충전됩니다.');
  };

  return (
    <Layout>
      <StBody>
        <h1>마이페이지</h1>
        <StInfo>
          <div>
            <p>아이디 </p>
            <p>{users.id}</p>
          </div>
          <div>
            <p>닉네임 </p>
            <p>{users.nickname}</p>
          </div>
          <div>
            <p>이메일 </p>
            <p>{users.email}</p>
          </div>
          <Stdiv>
            <p>소유한 포인트 </p>
            <p>{users.point} P</p>
            <Button size="md" onClick={() => Alert()}>
              충전하기
            </Button>
          </Stdiv>
        </StInfo>
        <Link to="/personal" style={{ textDecoration: 'none' }}>
          <Button size="lg">회원 정보 수정</Button>
        </Link>
        <div>
          <Sth2>현재 소유중인 상품</Sth2>
          <ItemList /> {/* 아이템리스트 임포트 부분 */}
        </div>
      </StBody>
    </Layout>
  );
};

export default MyPage;

const StBody = styled.div`
  background: #fbf3ee;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  min-width: 800px;
  margin-top: 10px;
  min-height: 1000px;
  height: 100%;
  > h1 {
    font-weight: bold;
  }
`;

const StInfo = styled.div`
  border-top: 1px solid #ffcd29;
  background: #f5f5f5;
  padding: 3%;
  margin-bottom: 60px;
  min-width: 800px;
  > div {
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    border-bottom: 10px solid ffcd29;

    > p {
      font-family: 'LeferiPoint-WhiteObliqueA';
      font-weight: 700;
    }
  }
`;

const Sth2 = styled.h2`
  margin-top: 50px;
  text-align: center;
`;

const Stdiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
