import React from 'react';
import moment from 'moment';
import {View, Text, ImageBackground} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
Icon.loadFont();

const Card: React.FC<{item: any}> = item => {
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
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.column}>
          <View>
            <Text style={styles.textCity}>
              {item.item.name}
              {/*moment.unix(item.dt).isSame(moment(), 'day')
                ? 'Hoje'
                : capitalizeFirstLetter(
                    moment.unix(item.dt).locale('pt-br').format('dddd'),
                )*/}
            </Text>
            <Text style={styles.textSimple}>
              {/*moment.unix(item.dt).locale('pt-br').format('ll')*/}
            </Text>
          </View>
          <View>
            <Text style={styles.tempDescription} />
            <Text style={styles.textSimple}>
              {item.item.tempMin}º - {item.item.tempMax}º
            </Text>
          </View>
        </View>
        <View style={styles.column3}>
          <ImageBackground
            source={{
              uri: `http://openweathermap.org/img/wn/${item.item.icon}@2x.png`,
            }}
            style={styles.weatherIcon}
          />
        </View>
        <View style={styles.column2}>
          <Text
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              fontSize: 50,
              fontWeight: 'bold',
              color: colorByTemperature(Math.round(item.item.tempActual)),
            }}>
            {Math.round(item.item.tempMax)}º
          </Text>
          <Text style={styles.textMax}>máx</Text>
        </View>
      </View>
    </View>
  );
};

export default Card;
