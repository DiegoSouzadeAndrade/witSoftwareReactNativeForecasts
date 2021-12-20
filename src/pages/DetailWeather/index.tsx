import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {RootMainStackParamList} from '../../routes/mainRouter';
import styles from './styles';

const DetailWeather = ({route}) => {
  const {item} = route.params;

  const colorByTemperature = (value: number) => {
    if (value <= 10) {
      return '#008BF0';
    }
    if (value <= 25) {
      return '#0A83AC';
    }
    if (value <= 30) {
      return '#FFAF32';
    }
    if (value <= 40) {
      return '#ff5f00';
    }
  };

  return (
    <View style={styles.containerDetail}>
      <View style={styles.card}>
        <View style={styles.column}>
          <View>
            <Text style={styles.textCity}>{item.name}</Text>
            <Text style={styles.textSimple}>{item.wheather}</Text>
            <ImageBackground
              source={{
                uri: `http://openweathermap.org/img/wn/${item.icon}@2x.png`,
              }}
              style={styles.weatherIcon}
            />
            <Text
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                fontSize: 50,
                fontWeight: 'bold',
                color: colorByTemperature(Math.round(item.tempActual)),
              }}>
              {Math.round(item.tempActual)}º
            </Text>
            <Text style={styles.textSimple}>
              {item.tempMin}º - {item.tempMax}º
            </Text>
          </View>
          <View>
            {item.description == null ? (
              <Text style={styles.tempDescription}>
                Não há alertas para hoje
              </Text>
            ) : (
              <Text style={styles.tempDescription}>{item.description}</Text>
            )}
          </View>
        </View>
        <View style={styles.column3} />
        <View style={styles.column2} />
      </View>
    </View>
  );
};

export default DetailWeather;
