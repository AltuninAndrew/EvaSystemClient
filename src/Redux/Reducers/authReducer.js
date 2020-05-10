import * as AuthAPI from "../../API/AuthAPI";

const SET_AUTH_USER_DATA = "SET-AUTH-DATA";

let initialState = {
    JWT:"",
    isAuth:false,
    role:"",
    username:"",
};

const authReducer = (state = initialState,action) =>{

};