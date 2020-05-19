import {applyMiddleware, combineReducers, createStore} from "redux";
import mainAdminPageReducer from "./Reducers/mainAdminPageReducer";
import adminProfilePageReducer from "./Reducers/adminProfilePageReducer";
import authReducer from "./Reducers/authReducer";
import thunkMiddleware from "redux-thunk"
import {reducer as formReducer} from "redux-form"
import criterionsEditingPageReducer from "./Reducers/criterionsEditingPageReducer";

let reducers = combineReducers({
    mainAdminPage: mainAdminPageReducer,
    auth:authReducer,
    profilePage:adminProfilePageReducer,
    criterionsEditingPage:criterionsEditingPageReducer,
    form:formReducer,
});

let store = createStore(reducers,applyMiddleware(thunkMiddleware));

window.store = store;

export default store;