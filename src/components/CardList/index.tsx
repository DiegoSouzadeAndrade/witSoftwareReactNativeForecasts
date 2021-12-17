import React from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../services/store';

const CardList: React.FC = () => {
  const data = useSelector((state: RootState) => state.cityForecasts);
  return (
    <View>
      <Text>{data[0]?.name}</Text>
    </View>
  );
};

export default CardList;
