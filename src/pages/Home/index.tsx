import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {View, Button} from 'react-native';
import {RootMainStackParamList} from '../../routes/mainRouter';
import CardList from '../../components/CardList';
import {fetchByLocation} from '../../services/ApiCalls';
import Geolocation from '@react-native-community/geolocation';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../services/store';

// Lisboa, Madrid, Paris, Berlim, Copenhaga, Roma, Londres, Dublin, Praga e Viena.
//(temp. máxima, minima, atual, velocidade do vento, humidade,
const Home = ({
  navigation,
}: NativeStackScreenProps<RootMainStackParamList, 'Home'>) => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    Geolocation.getCurrentPosition(info => {
      fetchByLocation(info.coords.latitude, info.coords.longitude).then(
        response => {
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
          });
        },
      );
    });
  }, [dispatch]);

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
