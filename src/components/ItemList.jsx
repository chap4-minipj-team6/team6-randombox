import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from '../element/Button';
import { useCookies } from 'react-cookie';
import jwt_decode from 'jwt-decode';
import { RandomsApi } from '../tools/instance';
import Item from '../components/Item';
import { useDispatch, useSelector } from 'react-redux';
import { __getItems } from '../redux/modules/itemSlice';
// import itemSlice from '../redux/modules/itemSlice';

const ItemList = () => {
  // const [tokens, setTokens] = useCookies(['token']);
  // const accesstoken = jwt_decode(tokens.token);
  // const userId = accesstoken.userId;
  // const [items, setItems] = useState([]);

  const items = useSelector((state) => state.items.items);
  const dispatch = useDispatch();

  //('리스트아이템', items);
  useEffect(() => {
    dispatch(__getItems());
  }, [dispatch]);

  //console.log(items[0]?.userId);
  //console.log('데이터', items);

  return (
    <StItemList>
      {items?.map((item) => {
        console.log(item);
        return <Item key={item.id} itemData={item.randomItem} />;
      })}
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
