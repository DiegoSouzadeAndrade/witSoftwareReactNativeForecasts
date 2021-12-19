import axios from 'axios';

const api = axios.create({baseURL: 'https://api.openweathermap.org/data/2.5'});

api.interceptors.request.use(req => {
  const apiKey = '28c5e034b88b2e6954f92d3e8f237bb1';
  req.params = {...req.params, appid: apiKey};
  return req;
});

export default api;
