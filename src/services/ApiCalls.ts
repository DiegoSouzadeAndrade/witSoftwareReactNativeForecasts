import api from './apiService';

export const fetchByLocation = (
  lat: number,
  lon: number,
  units: string,
  lang: string,
) => {
  return api.get(`/onecall?lat=${lat}&lon=${lon}&units=${units}&lang=${lang}`);
};

export const fetchByCityName = (cityName: string) => {
  return api.get(`/weather?q=${cityName}`);
};
