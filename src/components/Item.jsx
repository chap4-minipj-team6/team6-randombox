import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from '../element/Button';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { __deleteItems } from '../redux/modules/itemSlice';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { useCookies } from 'react-cookie';

const ItemList = ({ itemData }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [tokens, setTokens] = useCookies(['token']);
  const accesstoken = jwt_decode(tokens.token);
  const token = document.cookie.replace('token=', '');
  const userId = accesstoken.userId;

  const onDeleteHandler = () => {
    console.log('삭제할거야');
    const boxid = itemData.boxId;
    console.log(boxid);

    axios
      .delete(`https://yd-light.shop/mypages/${boxid}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(function (response) {
        // response.boxID.filter(
        //         (content) => content.id === action.payload
        window.location.replace(`/MyPage/${userId}`);
        alert('삭제되었습니다');
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    // dispatch(__deleteItems(itemData.Id));

    //console.log('아이템', itemData.userId);
  };
  //console.log('아이템', itemData.randomItem);
  //console.log('아이템', itemData);

  // if (!itemData) {
  //   return null;
  // }

  return (
    <StItem>
      <div>{itemData.randomItem.name}</div>
      <StButton>
        <Button size="md" onClick={() => alert('배송을 시작하겠습니다.')}>
          배송하기
        </Button>
        <Button size="md" onClick={onDeleteHandler}>
          버리기
        </Button>
      </StButton>
    </StItem>
  );
};

export default ItemList;

const StItem = styled.div`
  width: 700px;
  display: flex;
  justify-content: space-between;
  background-color: #ffdfa8;
  border-radius: 20px;
  padding: 10px 10px 10px 30px;
  margin-bottom: 10px;
  align-items: center;
`;

const StButton = styled.div`
  width: 320px;
  display: flex;
  justify-content: space-around;
`;
