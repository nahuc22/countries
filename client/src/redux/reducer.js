import { GET_COUNTRIES, GET_COUNTRY, GET_QUERY} from "./actions";



const initialState = {
    paises : [],
    actividades: [],
}

const RootReducer = (state = initialState, action) => {
    switch (action.type){
        case GET_COUNTRIES:
            return {...state, paises: action.payload};
        case GET_QUERY:
            return {...state, paises: action.payload};
        case GET_COUNTRY:
            return {...state, paises: action.payload};
        default: 
        return {...state}
    }
}

export default RootReducer;