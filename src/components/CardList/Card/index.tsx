import React from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import moment from 'moment';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../../routes/MainRouter';
Icon.loadFont();

const Card: React.FC<{item: any}> = ({item}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

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
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        navigation.navigate('DetailWeather', item);
      }}>
      <View style={styles.card}>
        <View style={styles.column}>
          <View>
            <Text style={styles.textCity}>
              {item.name}
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
              {item.tempMin}º - {item.tempMax}º
            </Text>
          </View>
        </View>
        <View style={styles.column3}>
          <ImageBackground
            source={{
              uri: `http://openweathermap.org/img/wn/${item.icon}@2x.png`,
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
              color: colorByTemperature(Math.round(item.tempActual)),
            }}>
            {Math.round(item.tempMax)}º
          </Text>
          <Text style={styles.textMax}>máx</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
