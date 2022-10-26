import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../element/Button';

import { RandomsApi } from '../tools/instance';

const ItemList = () => {
  const [items, setItems] = useState([]);

  RandomsApi.itemlist().then((res) => {
    console.log(res);
    setItems(res.data.data);
    // console.log(items);
  });

  const itemsld = () => {
    RandomsApi.itemsld().then((res) => {
      console.log(res);
      // console.log(items);
    });
  };

  return (
    <StItem>
      {/* <div>{items.name}</div> */}
      <StButton>
        <Button size="md">배송하기</Button>
        <Button size="md" onClick={() => itemsld}>
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
