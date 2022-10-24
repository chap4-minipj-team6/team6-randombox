import axios from 'axios';

const instance = axios.create({
  //baseURL: 'http://localhost:3001',
  baseURL: 'http://3.35.231.116/',
});

export const RandomsApi = {
  postSignUps: (payload) => instance.post('/signup', payload),
  deleteTodos: (payload) => instance.delete(`/signUps${payload}`),
  patchTodos: (payload) => instance.patch(`/signUps${payload.id}`, payload),
  login: (payload) => instance.post('/login', payload),
  mypage: (payload) => instance.get('/mypage', payload),
};
