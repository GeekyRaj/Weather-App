import {
    FETCH_SEARCH,
    GET_SEARCH,
    SEARCH_FAIL,
    CHANGE_LOCATION
} from './type';
import axios from 'axios';

export const searchResult=(text)=>dispatch=>{
    const token='3cb12595867f70'
    const searchApi=`https://api.locationiq.com/v1/autocomplete.php?key=${token}&q=${text}&limit=20`
    const requestApi=axios.get(searchApi)
    
    dispatch({
        type: FETCH_SEARCH
    })
    requestApi
    .then((resData)=>{
        dispatch({
            type:GET_SEARCH,
            payload:resData.data
        })
    })
    .catch((err)=>{
        dispatch({
            type:SEARCH_FAIL,
            payload:err
        })
    })
}

export const changeLocation=(lat, long, place, addr)=>dispatch=>{
    dispatch({
        type:CHANGE_LOCATION,
        payload:{lat, long, place, addr}
    })
}