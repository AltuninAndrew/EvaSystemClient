import {applyMiddleware, combineReducers, createStore} from "redux";
import adminReducer from "./adminReducer";
import thunkMiddleware from "redux-thunk"

let reducers = combineReducers({
    mainAdminPage: adminReducer,
});

let store = createStore(reducers,applyMiddleware(thunkMiddleware));

export default store;