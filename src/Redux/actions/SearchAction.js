import {
    FETCH_SEARCH,
    GET_SEARCH,
    SEARCH_FAIL,
    CHANGE_LOCATION,
    RESET_SEARCH,
    UPDATE_OPTION,
    STORE_GEOLOCATION,
    CITY_STATUS,
    CHANGE_LANG,
    CHANGE_UNIT,
    CHANGE_THEME
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

    console.log('***** ',place,lat,long);
    console.log('ruswdwdv')
        axios.get(`https://api.darksky.net/forecast/adecc2cfa6cc231c8852eadba20fed23/${lat},${long}`)
            .then(response => {
                console.log('=**VALUE**=', response.data);
                const placedata= response.data;
                dispatch({ type:CHANGE_LOCATION, payload:{lat, long, place, addr,placedata}})
            })
            .catch(error => console.log(error))
}

export const resetSearch = () =>dispatch =>{
    dispatch({
        type:RESET_SEARCH,
    })
}
export const updateOption= (index, lat, long, place, addr, data) =>dispatch =>{
    
    axios.get(`https://api.darksky.net/forecast/adecc2cfa6cc231c8852eadba20fed23/${lat},${long}`)
            .then(response => {
                console.log('=**VALUE**=', response.data);
                const placedata= response.data;
                console.log(placedata);
                console.log(index, place, addr);
                dispatch({ type:UPDATE_OPTION, payload:{lat, long, place, addr, placedata}, index:index})
            })
            .catch(error => console.log(error))
}

export const storeGeolocation = (lat , long) =>dispatch =>{
    console.log(lat,long);
    axios.get(`https://us1.locationiq.com/v1/reverse.php?key=c7fcf26f26a5c1&lat=${lat}&lon=${long}&format=json`)
        .then(response => {
            console.log('CITY GEO ',response.data.address.state_district);
            const place = response.data.address.state_district;
            dispatch({
                type:STORE_GEOLOCATION, payload:{lat,long, place}
            })
      })
      .catch(error => console.log('ERROR',error))
    
}

export const city_status = (status,lat,long) =>dispatch =>{
    console.log('CITY STATUS',status,lat,long)
    dispatch({
        type:CITY_STATUS, payload: {status,lat,long}
    })
}

export const change_lang= ( lang ,langDisp) =>dispatch =>{
    console.log('LANGUAGE SELECTED ',lang)
    dispatch({
        type:CHANGE_LANG, payload: {lang, langDisp}
    })
}

export const change_unit= ( unit, unitDisp ) =>dispatch =>{
    console.log('UNIT SELECTED ',unit)
    dispatch({
        type:CHANGE_UNIT, payload: {unit, unitDisp}
    })
}

export const change_theme= (theme) =>dispatch =>{
    console.log('THEME SELECTED ',theme);
    dispatch({
        type:CHANGE_THEME, payload: theme
    })
}