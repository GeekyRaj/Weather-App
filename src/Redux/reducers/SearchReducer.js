import { 
    FETCH_SEARCH,
    GET_SEARCH,
    SEARCH_FAIL,
    CHANGE_LOCATION
 } from '../actions/type';

const INITIAL_STATE = {
    Places: [],
    IsLoading: null,
    err:'',
    locn:[]
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
            return { ...state, locn: [...state.locn, action.payload] }
        default:
            return state;
    }
}