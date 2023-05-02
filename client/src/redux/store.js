import {createStore , applyMiddleware , compose} from "redux";
import RootReducer from "./reducer";
import thunkMiddleware from "redux-thunk";

const composeEnhacer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    RootReducer,
    composeEnhacer(applyMiddleware(thunkMiddleware))
);
export default store;