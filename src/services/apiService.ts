import axios from 'axios';

const api = axios.create({baseURL: 'https://api.openweathermap.org/data/2.5'});

api.interceptors.request.use(req => {
  const apiKey = 'ff39c01436558fab09dae8e3306ba352';
  req.params = {...req.params, appid: apiKey};
  return req;
});

export default api;
