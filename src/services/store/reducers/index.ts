import {combineReducers} from 'redux';
import cityForecasts from './cityForecasts';
import configForecasts from './configForecasts';

export default combineReducers({cityForecasts, configForecasts});
