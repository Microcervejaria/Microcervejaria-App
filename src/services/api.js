import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api-homebeer.herokuapp.com/',
});

export default api;
