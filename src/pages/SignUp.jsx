import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { __addBtn } from '../redux/modules/signUpSlice';
import { useDispatch, useSelector } from 'react-redux';
import useInput from '../myhook/useInput';
import Button from '../element/commonBtn';

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isSuccess = useSelector((state) => state.signUpS.isSuccess);
  console.log(isSuccess);

  // const successSign = error?.request;
  // console.log(successSign);
  // console.log(error);

  // const SignStatus = res.request.status;
  // const idError = res.data.errorMessage;
  // // console.log(successData);
  // console.log(error);
  // const idError = error.response.data.errorMessage;
  // // console.log(idError);
  // const SignStatus = error.response.status;
  // console.log(SignStatus);
  // const { isLoading, error } = useSelector((state) => state.signUpS);

  // if (isLoading) {
  //   return <div>로딩중...</div>;
  // }
  // if (error) return <div>오류가 발생했습니다</div>;
  // console.log(info.id.length);

  // console.log(info);
  const [info, onChangeValue, reset] = useInput({
    id: '',
    nickname: '',
    password: '',
    confirm: '',
    address: '',
    email: '',
  });
  const onAddBtn = (e) => {
    e.preventDefault();
    info.id === '' ? alert('아이디를 입력하세요!') : <></>;
    if (info.nickname.length === 1 && info.nickname.length <= 3) {
      alert('닉네임이 너무 짧습니다');
      return;
    }
    //비밀번호 확인

    if (
      info.id.trim() === '' ||
      info.nickname.trim() === '' ||
      info.password.trim() === '' ||
      info.confirm.trim() === '' ||
      info.address.trim() === '' ||
      info.email.trim() === ''
    ) {
      return alert('모든 항목을 입력해주셔유');
    }

    dispatch(__addBtn(info));
    //   .then((response) => {
    //   if (response) {
    //     props.history.push('/Login');
    //   } else {
    //     alert('Error');
    //   }
    // });
    console.log(info);
    console.log(2);

    reset();
  };
  //error도 하나의 객체.
  // if (SignStatus === 200) {
  //   alert(${idError});
  //   return navigate('/Login');
  // } else if (SignStatus === 412) {
  //   alert(${idError});
  // }

  return (
    <SignUpBox>
      <H1>회원가입</H1>
      <Form onSubmit={onAddBtn}>
        <SignUpSet>
          <Label>아이디</Label>
          <SignInput
            type="text"
            name="id"
            value={info.id}
            onChange={onChangeValue}
          />

          {info.id.length === 0 ? (
            <div></div>
          ) : info.id.length <= 3 || info.id.length >= 11 ? (
            <ErrorMessage>
              아이디는 대,소문자 또는 숫자를 포함한 4글자 이상 10글자 이하로
              적어주세요
            </ErrorMessage>
          ) : (
            <div></div>
          )}
          <Label>닉네임</Label>
          <SignInput
            type="name"
            name="nickname"
            value={info.nickname}
            onChange={onChangeValue}
          />
          {info.nickname.length === 0 ? (
            <div></div>
          ) : info.nickname.length <= 2 || info.nickname.length >= 11 ? (
            <ErrorMessage>
              닉네임은 대,소문자 또는 숫자를 포함한 3자 이상 10글자 이하로
              적어주세요
            </ErrorMessage>
          ) : (
            <div></div>
          )}
          <Label>비밀번호</Label>
          <SignInput
            type="password"
            name="password"
            value={info.password}
            onChange={onChangeValue}
          />
          {info.password.length === 0 ? (
            <div></div>
          ) : info.password.replace(' ', '').includes(info.nickname) ? (
            <ErrorMessage>패스워드에 닉네임이 포함되어있습니다.</ErrorMessage>
          ) : info.password.length <= 3 || info.password.length >= 30 ? (
            <ErrorMessage>
              비밀번호는 대,소문자 또는 숫자를 포함한 4자 이상 30글자 이하로
              적어주세요
            </ErrorMessage>
          ) : (
            <></>
          )}
          <Label>비밀번호 확인</Label>
          <SignInput
            type="password"
            name="confirm"
            value={info.confirm}
            onChange={onChangeValue}
          />
          {info.password.length === 0 ? (
            <div></div>
          ) : info.password !== info.confirm ? (
            <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>
          ) : (
            <div></div>
          )}
          <Label>이메일</Label>
          <SignInput
            type="email"
            name="email"
            value={info.email}
            onChange={onChangeValue}
          />
          {info.email.length === 0 ? (
            <div></div>
          ) : !info.email.includes('@') || !info.email.includes('.') ? (
            <ErrorMessage>@를 포함한 정상적인 이메일을 써주세요.</ErrorMessage>
          ) : (
            <div></div>
          )}
          <Label>배송주소</Label>
          <SignAddrInput
            type="text"
            name="address"
            value={info.address}
            onChange={onChangeValue}
          />
          {/* {error} */}
          <SavePoint>
            소유한 포인트 : <span>0000</span>
          </SavePoint>
        </SignUpSet>
        <Button
        // onClick={() => {
        //   navigate('/Login');
        // }}
        >
          가입완료
        </Button>
      </Form>
    </SignUpBox>
  );
};

export default SignUp;

// const SignWrap = styled.div`
//   width: 500px;
//   height: 700px;
//   padding: 10px;
//   border: 1px solid black;

// `;

//유효성검사
const ErrorMessage = styled.div`
  color: red;
  font-size: 0.8rem;
`;

//
const SignUpBox = styled.div`
  width: 400px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 25% auto;
  padding: 40px 0 40px 0;

  border-radius: 30px;
  background-color: lightyellow;
`;

const H1 = styled.h1`
  margin: 0 auto 20px auto;
`;
const Form = styled.form`
  width: 250px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SignUpSet = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 10px;
`;

const SignInput = styled.input`
  height: 30px;
  width: 100%;
  border: 1px solid gray;
  border-radius: 4px;
`;

const Label = styled.label`
  width: inherit;
`;

const SignAddrInput = styled.textarea`
  width: 250px;
  border: 1px solid gray;
  border-radius: 4px;
`;

const SavePoint = styled.div`
  width: inherit;
  margin-top: 10px;
`;

// const Button = styled.button`
//   width: inherit;
//   border: 1px solid black;
//   border-radius: 5px;

//   margin: 0 auto;

//   padding: 8px;
//   border: 1px solid #ffd372;
//   background-color: #ffd372;
// `;

// const BgBox = styled.div`
//   width: 100%;
//   height: 100%;
//   position: absolute;
//   z-index: -100;
//   background-color: rgba(0, 0, 0, 0.2);
// `;
