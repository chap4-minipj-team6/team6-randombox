import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../element/Button';
import { useCookies } from 'react-cookie';
import jwt_decode from 'jwt-decode';
import { RandomsApi } from '../tools/instance';
import Item from '../components/Item';

const ItemList = () => {
  const [tokens, setTokens] = useCookies(['token']);
  const accesstoken = jwt_decode(tokens.token);
  const userId = accesstoken.userId;
  const [items, setItems] = useState([]);

  // RandomsApi.itemlist().then((res) => {
  //   setItems(res.data.data);
  //   //(items);
  // });

  return (
    // <StItemList> <Item key={item.id} itemData={item} /> </StItemList>

    <StItemList>
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
