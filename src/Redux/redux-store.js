import {combineReducers, createStore} from "redux";
import adminReducer from "./adminReducer";

let reducers = combineReducers({
    mainAdminPage: adminReducer,
});

let store = createStore(reducers);

export default store;