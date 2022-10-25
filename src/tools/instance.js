import axios from 'axios';
const instance = axios.create({
  // baseURL: 'http://localhost:3001',
  baseURL: 'http://13.125.213.146:3000',
  // baseURL: 'http://3.35.231.116/',
});

export const RandomsApi = {
  postSignUps: (payload) => instance.post('/signup', payload),
  postReq: (payload) => instance.post('/goods', payload),
  // deleteReq: (payload) => instance.delete(`/signUps${payload}`),
  // patchReq: (payload) => instance.patch(`/signUps${payload.id}`, payload),
};

//
// const re_id = /^[a-zA-Z0-9]{4,10}$/;
// const re_nickname = /^[a-zA-Z0-9]{3,10}$/;
// const re_password = /^[a-zA-Z0-9]{4,30}$/;
// const re_email =
// /^([\w\.\_\-])*[a-zA-Z0-9]+([\w\.\_\-])*([a-zA-Z0-9])+([\w\.\_\-])+@([a-zA-Z0-9]+\.)+[a-zA-Z0-9]{2,8}$/;
