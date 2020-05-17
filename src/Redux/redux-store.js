import {applyMiddleware, combineReducers, createStore} from "redux";
import mainAdminPageReducer from "./Reducers/mainAdminPageReducer";
import adminProfilePageReducer from "./Reducers/adminProfilePageReducer";
import authReducer from "./Reducers/authReducer";
import thunkMiddleware from "redux-thunk"
import {reducer as formReducer} from "redux-form"

let reducers = combineReducers({
    mainAdminPage: mainAdminPageReducer,
    auth:authReducer,
    profilePage:adminProfilePageReducer,
    form:formReducer,
});

let store = createStore(reducers,applyMiddleware(thunkMiddleware));

window.store = store;

export default store;