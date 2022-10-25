import axios from 'axios';
import jwt_decode from 'jwt-decode';

const token = document.cookie.replace('token=', '');
const accesstoken = token && jwt_decode(token);
const id = accesstoken.userId;

const instance = axios.create({
  baseURL: 'http://3.35.231.116/',
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const RandomsApi = {
  postSignUps: (payload) => instance.post('/signup', payload),
  login: (payload) => instance.post('/login', payload),
  mypage: (payload) => instance.get(`/mypages/${id}`),
  personal: (payload) => instance.put(`/mypages/${id}/edit`, payload),
  itemlist: (payload) => instance.get(`/mypages/goods/${id}`),
};
