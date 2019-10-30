import { 
    GET_DATA,
    GET_CITY
 } from '../actions/type';

const INITIAL_STATE = {
    weather: [],
    city:[],
    daily:[],
    ready: true,
};

export default (state = INITIAL_STATE, action) =>{
    console.log('ACTION ',action.payload);
    switch(action.type){
        case GET_DATA:
            return {...state, weather : action.payload, daily : action.daily ,ready:false };
        case GET_CITY:
            return { ...state, city : action.payload }
        default:
            return state;
    }
}