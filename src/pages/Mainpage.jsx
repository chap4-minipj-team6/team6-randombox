import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import jwt_decode from 'jwt-decode';
import { useParams } from 'react-router-dom';

const Mainpage = () => {
  const [tokens, setTokens] = useCookies(['token']);
  //console.log(tokens);
  const accesstoken = jwt_decode(tokens.token);
  //console.log(accesstoken);

  const userId = accesstoken.userID;
  //const { userId } = useParams();

  const navigate = useNavigate();

  return (
    <div>
      <button
        onClick={() => {
          navigate('/MyPage/${userId}');
        }}
      >
        마이페이지
      </button>
    </div>
  );
};

export default Mainpage;
