import {applyMiddleware, combineReducers, createStore} from "redux";
import adminReducer from "./Reducers/adminReducer";
import authReducer from "./Reducers/authReducer";
import thunkMiddleware from "redux-thunk"
import {reducer as formReducer} from "redux-form"

let reducers = combineReducers({
    mainAdminPage: adminReducer,
    auth:authReducer,
    form:formReducer,
});

let store = createStore(reducers,applyMiddleware(thunkMiddleware));

window.store = store;

export default store;