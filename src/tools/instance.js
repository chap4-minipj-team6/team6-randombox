import axios from 'axios';
import jwt_decode from 'jwt-decode';

// console.log(document.cookie);
// export const verifycookie = () => {
//   if (document.cookie === undefined) {
//     return;
//   } else if (document.cookie === 'token=undefined') {
//     return;
//   } else {
//     const token = document.cookie.replace('token=', ' ');
//     const accesstoken = token && jwt_decode(token);
//     const id = accesstoken.userId;
//     console.log(id);
//   }
// };

export const token = document.cookie.replace('token=', ' ');
// console.log(token);
export const accesstoken = token && jwt_decode(token);
// console.log(accesstoken);
export const id = accesstoken.userId;
// console.log(id);
//console.log(id);

const instance = axios.create({
  baseURL: 'http://3.35.231.116/', //우성님서버
  //baseURL: 'http://15.165.15.206/', //이현님서버
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
// console.log(instance);
// console.log(token);

export const RandomsApi = {
  postSignUps: (payload) => instance.post('/signup', payload),
  login: (payload) => instance.post('/login', payload),
  mypage: (payload) => instance.get(`/mypages/${id}`),
  //mypage: (payload) => instance.get(`/mypages/gghk`),
  personal: (payload) => instance.put(`/mypages/${id}/edit`, payload),
  itemsld: (payload) => instance.delete(`/mypages/goods/${id}`),
  header: (payload) =>
    instance.get(`/mypages/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
};
