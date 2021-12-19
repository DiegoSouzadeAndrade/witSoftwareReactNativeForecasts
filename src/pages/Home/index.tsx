import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect, useLayoutEffect} from 'react';
import {View, Button, TouchableOpacity} from 'react-native';
import {RootMainStackParamList} from '../../routes/mainRouter';
import CardList from '../../components/CardList';
import {fetchByLocation, fetchByCityName} from '../../services/ApiCalls';
import Geolocation from '@react-native-community/geolocation';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch} from '../../services/store';
import {RootState} from '../../services/store';
import Icon from 'react-native-vector-icons/FontAwesome';
Icon.loadFont();

// Lisboa, Madrid, Paris, Berlim, Copenhaga, Roma, Londres, Dublin, Praga e Viena.
//(temp. máxima, minima, atual, velocidade do vento, humidade,
const Home = ({
  navigation,
}: NativeStackScreenProps<RootMainStackParamList, 'Home'>) => {
  const dispatch = useDispatch<AppDispatch>();
  const configs = useSelector((state: RootState) => state.configForecasts);
  const cities = [
    'Lisboa',
    'Madrid',
    'Paris',
    'Berlim',
    'Copenhaga',
    'Roma',
    'Londres',
    'Dublin',
    'Praga',
    'Viena',
  ];

  useEffect(() => {
    Geolocation.getCurrentPosition(info => {
      fetchByLocation(
        info.coords.latitude,
        info.coords.longitude,
        configs.units,
        configs.lang,
      ).then(response => {
        console.log(Object.keys(response.data));
        dispatch({
          type: 'addCity',
          name: 'Cidade local',
          humidity: response.data.current.humidity,
          tempActual: response.data.current.temp,
          tempMax: response.data.daily[0]?.temp?.max,
          tempMin: response.data.daily[0]?.temp?.min,
          windSpeed: response.data.current.wind_speed,
          wheather: response.data.current.weather[0]?.main,
          icon: response.data.current.weather[0]?.icon,
        });
      });
    });
  }, [dispatch, configs.units, configs.lang]);

  useEffect(() => {
    cities.forEach(city => {
      fetchByCityName(city).then(responseByName => {
        fetchByLocation(
          responseByName.data.coord.lat,
          responseByName.data.coord.lon,
          configs.units,
          configs.lang,
        ).then(response => {
          dispatch({
            type: 'addCity',
            name: `${city}`,
            humidity: response.data.current.humidity,
            tempActual: response.data.current.temp,
            tempMax: response.data.daily[0]?.temp?.max,
            tempMin: response.data.daily[0]?.temp?.min,
            windSpeed: response.data.current.wind_speed,
            wheather: response.data.current.weather[0]?.main,
            icon: response.data.current.weather[0]?.icon,
          });
        });
      });
    });
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            flexDirection: 'row',
            marginLeft: 5,
            marginRight: 15,
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity onPress={() => console.log('add city')}>
            <Icon name="search" size={18} color="rgba(255, 255, 255, 1.0)" />
          </TouchableOpacity>
        </View>
      ),
    });
  });

  return (
    <View>
      <Button
        onPress={() => {
          navigation.navigate('Config');
        }}
        title="Config"
      />
      <CardList />
    </View>
  );
};

export default Home;
