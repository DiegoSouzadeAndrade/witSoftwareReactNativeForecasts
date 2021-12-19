import React from 'react';
import {View, Text} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {RootMainStackParamList} from '../../routes/mainRouter';

const DetailWeather = ({
  navigation,
}: NativeStackScreenProps<RootMainStackParamList, 'DetailWeather'>) => {
  return (
    <View>
      <Text>Detail</Text>
    </View>
  );
};

export default DetailWeather;
