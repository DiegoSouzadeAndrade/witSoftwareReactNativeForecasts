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
        <Picker.Item label="Azerbaijani" value="az" />
        <Picker.Item label="Bulgarian" value="bg" />
        <Picker.Item label="Catalan" value="ca" />
        <Picker.Item label="Czech" value="cz" />
        <Picker.Item label="Danish" value="da" />
        <Picker.Item label="German" value="de" />
        <Picker.Item label="Greek" value="el" />
        <Picker.Item label="English" value="en" />
        <Picker.Item label="Basque" value="eu" />
        <Picker.Item label="Persian (Farsi)" value="fa" />
        <Picker.Item label="Finnish" value="fi" />
        <Picker.Item label="French" value="fr" />
        <Picker.Item label="Galician" value="gl" />
        <Picker.Item label="Hebrew" value="he" />
        <Picker.Item label="Hindi" value="hi" />
        <Picker.Item label="Croatian" value="hr" />
        <Picker.Item label="Hungarian" value="hu" />
        <Picker.Item label="Indonesian" value="id" />
        <Picker.Item label="Hindi" value="hi" />
        <Picker.Item label="Italian" value="it" />
        <Picker.Item label="Korean" value="kr" />
        <Picker.Item label="Latvian" value="la" />
        <Picker.Item label="Lithuanian" value="lt" />
        <Picker.Item label="Macedonian" value="mk" />
        <Picker.Item label="Norwegian" value="no" />
        <Picker.Item label="Dutch" value="nl" />
        <Picker.Item label="Polish" value="pl" />
        <Picker.Item label="Norwegian" value="no" />
        <Picker.Item label="Portuguese" value="pt" />
        <Picker.Item label="Português Brasil" value="pt_br" />
        <Picker.Item label="Romanian" value="ro" />
        <Picker.Item label="Russian" value="ru" />
        <Picker.Item label="Português Brasil" value="pt_br" />
        <Picker.Item label="Swedish" value="sv, se" />
        <Picker.Item label="Slovak" value="sk" />
        <Picker.Item label="Slovenian" value="sl" />
        <Picker.Item label="Spanish" value="sp, es" />
        <Picker.Item label="Serbian" value="sr" />
        <Picker.Item label="Thai" value="th" />
        <Picker.Item label="Turkish" value="tr" />
        <Picker.Item label="Ukrainian" value="ua, uk" />
        <Picker.Item label="Vietnamese" value="vi" />
        <Picker.Item label="Chinese Simplified" value="zh_cn" />
        <Picker.Item label="Chinese Traditional" value="zh_tw" />
        <Picker.Item label="Zulu" value="zu" />
      </Picker>
    </View>
  );
};

export default Config;
