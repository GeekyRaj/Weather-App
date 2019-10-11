
import {
    GET_DATA,
    GET_CITY
} from './type';
import axios from 'axios';
export const get_data = ({lat,lng}) => {
    console.log('DATA METHOD',lat,lng);
    return (dispatch) => {
        axios.get(`https://api.darksky.net/forecast/adecc2cfa6cc231c8852eadba20fed23/${lat},${lng}`)
            .then(response => {
                console.log('DATA TEST', response.data);
                dispatch({ type: GET_DATA, payload: response.data, daily:response.data.daily })
            })
            .catch(error => console.log(error))
    }
};

export const get_city = ({lat,lng}) => {
    console.log('CITY METHOD',lat,lng);
    return (dispatch) => {
        //axios.get(`https://us1.locationiq.com/v1/reverse.php?key=c7fcf26f26a5c1&lat=${position.coords.latitude}&lon=${position.coords.longitude}&format=json`)
        axios.get(`https://us1.locationiq.com/v1/reverse.php?key=c7fcf26f26a5c1&lat=${lat}&lon=${lng}&format=json`)
        .then(response => {
            console.log('CITY ACTION ',response.data);
            dispatch({ type: GET_CITY, payload: response.data.address })
      })
      .catch(error => console.log('ERROR',error))
    }
};