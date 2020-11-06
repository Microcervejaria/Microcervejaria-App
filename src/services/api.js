import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api-homebeer.herokuapp.com/',
  headers: {
    'Content-Type': 'application/json',
  },
  responseEncoding: 'utf8',
});

export default api;
