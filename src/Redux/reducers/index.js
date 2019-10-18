 import { combineReducers } from 'redux';
 import DataReducer from './Counter';
 import Weather from './LoadDataReducer';
 import SearchReducer from './SearchReducer';

export default combineReducers({
     data: DataReducer,
     dataAPI: Weather,
     search: SearchReducer
})