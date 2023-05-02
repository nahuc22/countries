import { GET_COUNTRIES } from "./actions";



const initialState = {
    paises : []
}

const RootReducer = (state = initialState, action) => {
    switch (action.type){
        case GET_COUNTRIES:
            return {...state, paises: action.payload};

        default: 
        return {...state}
    }
}

export default RootReducer;