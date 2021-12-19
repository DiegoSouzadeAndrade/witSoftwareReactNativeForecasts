import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../services/store';
import {AppDispatch} from '../../services/store';

const Config: React.FC = ({}) => {
  const dispatch = useDispatch<AppDispatch>();
  const configs = useSelector((state: RootState) => state.configForecasts);
  const [selectedUnitValue, setSelectedUnitValue] = useState(configs.units);
  const [selectedLangValue, setSelectedLangValue] = useState(configs.lang);

  return (
    <View>
      <Picker
        selectedValue={selectedUnitValue}
        onValueChange={(itemValue: string, itemIndex) => {
          setSelectedUnitValue(itemValue);
          console.log(typeof itemValue);
          dispatch({
            type: 'changeUnit',
            units: {itemValue},
          });
        }}>
        <Picker.Item label="Standard" value="standard" />
        <Picker.Item label="Metric" value="metric" />
        <Picker.Item label="Imperial" value="imperial" />
      </Picker>
      <Picker
        selectedValue={selectedLangValue}
        onValueChange={(itemValue: string, itemIndex) => {
          setSelectedLangValue(itemValue);
          console.log(typeof itemValue);
          dispatch({
            type: 'changeLang',
            lang: {itemValue},
          });
        }}>
        <Picker.Item label="Afrikaans" value="af" />
        <Picker.Item label="Albanian" value="al" />
        <Picker.Item label="Arabic" value="ar" />
      </Picker>
    </View>
  );
};

export default Config;
