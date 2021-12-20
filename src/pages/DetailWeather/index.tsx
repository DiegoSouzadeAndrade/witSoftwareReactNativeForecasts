import React, {useLayoutEffect} from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
Icon.loadFont();

const DetailWeather = ({route, navigation}) => {
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
          <TouchableOpacity onPress={() => navigation.navigate('Config')}>
            <Icon name="bars" size={25} color="rgba( 255, 255, 255 , 1.0)" />
          </TouchableOpacity>
        </View>
      ),
      headerStyle: {
        backgroundColor: '#6c99f4',
      },
      title: 'Forecasts detail',
      headerTitleStyle: {
        fontFamily: 'bold',
      },
    });
  });

  return (
    <View style={styles.containerDetail}>
      <View style={styles.card}>
        <View style={styles.column}>
          <View style={styles.column4}>
            <Text style={styles.textCity}>{item.name}</Text>
            <Text style={styles.textSimple}>{item.wheather}</Text>
          </View>
          <View style={styles.column3}>
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
          </View>
        </View>
        <View style={styles.column3}>
          <View>
            <Text style={styles.textSimple}>Wind speed</Text>
            <Text style={styles.textSimple}>{item.windSpeed}</Text>
          </View>
          <View>
            <Text style={styles.textSimple}>Humidity</Text>
            <Text style={styles.textSimple}>{item.humidity}</Text>
          </View>
          <View>
            <Text style={styles.textSimple}>Min - Max</Text>
            <Text style={styles.textSimple}>
              {item.tempMin}º - {item.tempMax}º
            </Text>
          </View>
        </View>
        <View style={styles.column2}>
          <View>
            {item.description == null ? (
              <Text style={styles.tempDescription}>
                There are no alerts for today
              </Text>
            ) : (
              <View>
                <Text style={styles.textSimple}>
                  Alerts by {item.senderName}
                </Text>
                <Text style={styles.tempDescription}>{item.description}</Text>
              </View>
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

export default DetailWeather;
