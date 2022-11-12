import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import { __addBtn } from '../redux/modules/signUpSlice';
import { useDispatch, useSelector } from 'react-redux';
import useInput from '../myhook/useInput';
// import Button from '../element/commonBtn';
import { useParams } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import jwt_decode from 'jwt-decode';
import { RandomsApi } from '../tools/instance';
import axios from 'axios';

const Request = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [good, onChangeValue, reset] = useInput({
    id: 0,
    comment: '',
  });
  const [tokens, setTokens] = useCookies(['token']);
  const accesstoken = jwt_decode(tokens.token);
  const userId = accesstoken.userId;
  const [user, setUsers] = useState();

  // const __addBtn = RandomsApi.postReqId(payload).then((res) => {

  //   console.log(res);

  // });

  console.log(good);

  const onAddBtn = (e) => {
    e.preventDefault();
    if (good.comment.trim() === '') {
      return alert('빈칸을 입력해주셔유');
    }

    // dispatch(__addBtn(good));
    RandomsApi.postReqId(good)
      .then((res) => {
        //then 성공하면
      })
      .catch((err) => {
        console.log(err);
      });

    console.log(1);

    reset();
  };

  return (
    <div>
      <Header />
      <Form onSubmit={onAddBtn}>
        <div>
          <InputWrap>
            <Input
              id={good.userId}
              type="text"
              placeholder="원하는 상품을 입력해주세요"
              onChange={onChangeValue}
            />
            <Button>요청하기</Button>
          </InputWrap>
        </div>
      </Form>
      <div>
        <WannaList>
          {/* console.log(good)
          {good.map((goods) => {
            return (
              <CommentSet>
                {/* <UserName key={id}>{goods.userId}</UserName> */}
          {/* <UserId key={userId}>유저이름</UserId>
                <Comment>코멘트</Comment> */}
          {/* <Comment>{goods.comment}</Comment> */}
          {/* <div className="button-set">
                  <button
                    className="req-delete-button button"
                    // onClick={() => onDeleteHanlder(todo.id)
                    // }
                  >
                    삭제하기
                  </button> */}
          {/* <button
          className="todo-complete-button button"
          onClick={() => onEditHandler(todo.id)}
        >
          {todo.isDone ? "취소" : "완료"}
        </button> */}
          {/* </div>
              </CommentSet> */}
          {/* // );
          // })} */}
        </WannaList>
      </div>
    </div>
  );
};

export default Request;

//list
const WannaList = styled.div`
  width: 50%;
  margin: 20px auto;
  padding: 20px;

  border: 2px solid #fcd19c;
  border-radius: 10px;
`;

const CommentSet = styled.div`
  width: 80%;
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

const UserId = styled.div`
  width: 20%;
  height: 30px;
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
  margin: 30px auto;
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
  width: 600px;
  height: 20px;
  margin-left: 20%;
  padding: 10px;

  border-radius: 20px;
  border: 1px solid white;

  font-size: 20px;
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

  border: none;
  border-radius: 20px;

  margin-right: 26%;

  background-color: #ffefc1;

  &:hover {
    background-color: #fcd19c;
    cursor: pointer;
  }
`;
