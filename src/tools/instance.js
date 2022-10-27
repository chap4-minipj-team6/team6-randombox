import axios from 'axios';
import jwt_decode from 'jwt-decode';

const token = document.cookie.replace('token=', '');
const accesstoken = token && jwt_decode(token);
const id = accesstoken.userId;

const instance = axios.create({
  baseURL: 'https://ws-study.shop',
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const RandomsApi = {
  postSignUps: (payload) => instance.post('/signup', payload),
  login: (payload) => instance.post('/login', payload),
  mypage: (payload) => instance.get(`/mypages/${id}`),
  personal: (payload) => instance.put(`/mypages/${id}/edit`, payload),
  item: (payload) => instance.get(`/mypages/goods/${id}`),
  itemdelete: (payload) => instance.delete(`/mypages/${id}/:goodsId`),
  header: (payload) => instance.get(`/mypages/main/${id}`),
  boxopen: (payload) => instance.post('/mypages', payload),
  password: (payload) => instance.put(`/login/password`, payload),
};
