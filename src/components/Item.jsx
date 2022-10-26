import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from '../element/Button';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { __deleteItems } from '../redux/modules/itemSlice';

const ItemList = ({ itemData }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onDeleteHandler = () => {
    // dispatch(__deleteItems(itemData.userId));
  };
  //console.log('아이템', itemData);
  // if (!itemData) {
  //   return null;
  // }

  return (
    <StItem>
      <div>{itemData.name}</div>
      <StButton>
        <Button size="md">배송하기</Button>
        <Button size="md" onclick={onDeleteHandler}>
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
