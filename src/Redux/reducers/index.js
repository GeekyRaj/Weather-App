 import { combineReducers } from 'redux';
 import DataReducer from './Counter';
 import Weather from './LoadDataReducer'

export default combineReducers({
     data: DataReducer,
     dataAPI: Weather
})