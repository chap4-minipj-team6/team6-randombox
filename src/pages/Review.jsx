import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';

const Review = () => {
  return (
    <div>
      <Header />
      <SelForm>
        <SelBox>
          <Select>
            <Option>나의 상품</Option>
            <Option value="1">item01</Option>
            <Option value="2">item02</Option>
            <Option value="3">item03</Option>
          </Select>
        </SelBox>
        <Form>
          <div>
            <InputWrap>
              <Input type="text" placeholder="한 줄 평을 입력해주세유" />
              <Button>요청하기</Button>
            </InputWrap>
          </div>
        </Form>
      </SelForm>
      <div>
        <WannaList>
          <CommentSet>
            <UserGoods>userGoods</UserGoods>
            <UserName>userName</UserName>
            <Comment>comment</Comment>
            {/* {data.map((comment) => (
            <div key={comment.id}>{comment.userName}</div>  
            <div>comment</div> 
               ))} */}
          </CommentSet>
        </WannaList>
      </div>
    </div>
  );
};

export default Review;

//ALL Wrap
const SelForm = styled.div`
  width: 80%;
  height: 60px;
  margin: 20px auto;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
//select Box
const SelBox = styled.div`
  width: 210px;
  margin-left: 22%;
`;

const Select = styled.select`
  width: 200px;
  height: 40px;
  padding: 5px;

  font-size: 1rem;

  text-align: center;

  /* border: 1px solid #fcd19c; */
  border: none;
  border-radius: 14px;
  box-shadow: 0 3px 6px 0 #fcd19c;
`;
const Option = styled.option`
  border: none;
  border-radius: 10px;
`;
//list
const WannaList = styled.div`
  width: 50%;
  margin: 20px auto;
  padding: 30px;

  border: 2px solid #fcd19c;
  border-radius: 10px;
`;

const CommentSet = styled.div`
  margin: 0 auto;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  border-radius: 10px;
  background-color: #ffefc1;

  &:hover {
    box-shadow: 0 3px 4px 0 #fcd19c;
  }
`;

const UserGoods = styled.div`
  height: 30px;
  margin: 0 20px;
  padding: 4px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: 1px solid white;
  border-radius: 10px;
`;

const UserName = styled.div`
  margin: 0 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 10px;
  background-color: #ffefc1;
`;

const Comment = styled.div`
  width: 80%;
  margin: 0 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 10px;
  background-color: white;
`;

//Input

const Form = styled.form`
  width: 80%;
  margin: 0 auto;
  outline: none;

  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const InputWrap = styled.div`
  margin: 0 auto;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  width: 400px;
  height: 16px;
  padding: 12px;

  border-radius: 14px;
  border: 1px solid white;

  font-size: 18px;
  background-color: #fcd19c;

  &:focus {
    background-color: #ffefc1;
    color: black;
    border: none;
    outline: none;
  }
`;

const Button = styled.button`
  float: right;
  width: 100px;

  padding: 12px;
  margin: 0 20px;
  margin-right: 30%;

  border: none;
  border-radius: 14px;

  background-color: #ffefc1;

  &:hover {
    background-color: #fcd19c;
    cursor: pointer;
  }
`;
