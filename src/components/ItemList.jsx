import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../element/Button';
import { useCookies } from 'react-cookie';
import jwt_decode from 'jwt-decode';
import { RandomsApi } from '../tools/instance';
import Item from '../components/Item';
import { useSelector } from 'react-redux';

const ItemList = () => {
  const [tokens, setTokens] = useCookies(['token']);
  const accesstoken = jwt_decode(tokens.token);
  const userId = accesstoken.userId;

  const { isLoading, error, items } = useSelector((state) => state.items);

  return (
    // <StItemList> <Item key={item.id} itemData={item} /> </StItemList>

    <StItemList>
      {items.map((items) => (
        <Item key={userId} />
      ))}
      <Item />
    </StItemList>
  );
};

export default ItemList;

const StItemList = styled.div`
  border: 1px solid #ffcd29;
  background: #f5f5f5;
  padding: 3%;
  margin-bottom: 60px;
  min-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
