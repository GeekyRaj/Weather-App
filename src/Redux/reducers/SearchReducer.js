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
 } from '../actions/type';

const INITIAL_STATE = {
    geoLat : '19.0760',
    geotLong : '72.8777',
    geoPlace:'',
    isgeoSel: true,
    //SETTING VARIABLE
    selLat : '19.0760',
    selLong : '72.8777',
    selLang:'en',
    selLangDisp: 'English',
    selUnit:'auto',
    selUnitDisp: 'Auto',
    selTheme: 'Default',

    Places: [],
    IsLoading: null,
    err:'',
    locn:[],
    updateLoading:false
};

export default (state = INITIAL_STATE, action) =>{
    console.log('ACTION ',action.payload);
    switch(action.type){
        case FETCH_SEARCH:
            return { ...state, IsLoading:true};
        case GET_SEARCH:    //On Success
            return {...state, Places: action.payload, IsLoading:false};
        case SEARCH_FAIL:
            return { ...state, IsLoading: false,err:'Invalid search'};
        case CHANGE_LOCATION:
            return { ...state, locn: [...state.locn, action.payload] };
        case RESET_SEARCH:
            return { ...state , locn:[]};
        case UPDATE_OPTION:
            return { 
                ...state,
                locn:{
                    ...state.locn,
                    [action.index]:{
                      lat:action.payload.lat,
                      long:action.payload.long,
                      place:action.payload.d,
                      addr:action.payload.d,
                      placedata:action.payload.placedata
                    }
                }
            };
        case STORE_GEOLOCATION:
            return { ...state, geoLat:action.payload.lat, geotLong:action.payload.long, geoPlace:action.payload.place };
        case CITY_STATUS:
            return { ...state, isgeoSel: action.payload.status, selLat: action.payload.lat, selLong: action.payload.long }
        case CHANGE_LANG:
            return { ...state, selLang: action.payload.lang, selLangDisp: action.payload.langDisp };
        case CHANGE_UNIT:
            return { ...state, selUnit: action.payload.unit, selUnitDisp: action.payload.unitDisp }
        case CHANGE_THEME:
            return { ...state, selTheme: action.payload }
        default:
            return state;
    }
}