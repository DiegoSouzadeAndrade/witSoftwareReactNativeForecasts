import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import {Home, Config, DetailWeather} from '../pages';

export type RootMainStackParamList = {
  Home: undefined;
  Config: undefined;
  DetailWeather: undefined;
};

const MainStack = createNativeStackNavigator();

const MainRouter: React.FC = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator>
        <MainStack.Screen name="Home" component={Home} />
        <MainStack.Screen name="Config" component={Config} />
        <MainStack.Screen name="DetailWeather" component={DetailWeather} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default MainRouter;
