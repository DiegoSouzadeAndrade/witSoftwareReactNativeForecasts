import api from './apiService';

export const fetchCityForecasts = async (city: string) => {
  return api.get('/');
};

export const fetchByLocation = (lat: number, lon: number) => {
  return api.get(`/onecall?lat=${lat}&lon=${lon}`);
};

export const fetchByCityName = (cityName: string) => {
  return api.get(`/weather?q=${cityName}`);
};
