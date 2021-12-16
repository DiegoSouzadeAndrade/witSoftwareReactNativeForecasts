import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {View, Text, Button} from 'react-native';
import {RootMainStackParamList} from '../routes/mainRouter';

const Home = ({
  navigation,
}: NativeStackScreenProps<RootMainStackParamList, 'Home'>) => {
  return (
    <View>
      <Button
        onPress={() => {
          navigation.navigate('Config');
        }}
        title="Config"
      />
    </View>
  );
};

export default Home;
