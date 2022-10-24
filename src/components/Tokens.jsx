import React from 'react';
import { useCookies } from 'react-cookie';
import jwt_decode from 'jwt-decode';

const Tokens = () => {
  const [tokens, setTokens] = useCookies(['token']);
  console.log(tokens.token);
  const accesstoken = jwt_decode(tokens.token);
  console.log(accesstoken);
  return <div>Mainpage</div>;
};

export default Tokens;
