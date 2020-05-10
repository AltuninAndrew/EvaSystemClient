import {applyMiddleware, combineReducers, createStore} from "redux";
import adminReducer from "./Reducers/adminReducer";
import authReducer from "./Reducers/adminReducer";
import thunkMiddleware from "redux-thunk"
import {reducer as formReducer} from "redux-form"

let reducers = combineReducers({
    mainAdminPage: adminReducer,
    auth:authReducer,
    form:formReducer,
});

let store = createStore(reducers,applyMiddleware(thunkMiddleware));

export default store;