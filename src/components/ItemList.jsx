import React from 'react';
import styled from 'styled-components';
import Button from '../element/Button';

const ItemList = () => {
  return (
    <StItemList>
      <StItem>
        <div>에어팟</div>
        {/* <div>{itemName}</div> */}
        <StButton>
          <Button size="md">배송하기</Button>
          <Button size="md">버리기</Button>
        </StButton>
      </StItem>
      <StItem>
        <div>에어팟</div>
        {/* <div>{itemName}</div> */}
        <StButton>
          <Button size="md">배송하기</Button>
          <Button size="md">버리기</Button>
        </StButton>
      </StItem>
      <StItem>
        <div>에어팟</div>
        {/* <div>{itemName}</div> */}
        <StButton>
          <Button size="md">배송하기</Button>
          <Button size="md">버리기</Button>
        </StButton>
      </StItem>
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
