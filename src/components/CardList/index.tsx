import React from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  FlatList,
} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../services/store';
import styles from './styles';
import Card from './Card';

const CardList: React.FC = () => {
  const data = useSelector((state: RootState) => state.cityForecasts);

  return (
    <SafeAreaView>
      {data.length === 0 ? (
        <View style={styles.loadingView}>
          <ActivityIndicator color="#fff" size="large" />
        </View>
      ) : (
        <FlatList
          data={data}
          renderItem={({item}) => <Card item={item} />}
          keyExtractor={item => item.dt.toString()}
        />
      )}
    </SafeAreaView>
  );
};

export default CardList;
