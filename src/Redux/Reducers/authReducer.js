import * as AuthAPI from "../../API/AuthAPI";
import {stopSubmit} from "redux-form";

const SET_AUTH_USER_DATA = "SET-AUTH-DATA";
const SET_USER_INFO = "SET-USER-INFO";
const REMOVE_USER = "REMOVE-USER";

let jwtFromStorage = localStorage.getItem("userJWT");

let initialState = {
    JWT:jwtFromStorage,
    isAuth:false,
    role:"",
    username:"",
    userInfo:{
        firstName:"",
        lastName:"",
        middleName:"",
        position:"",
        avatarImage:undefined,
    }
};

const authReducer = (state = initialState,action) =>{
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.data,
            };
        case SET_USER_INFO:
            return {
                ...state,
                userInfo: action.data,
            };
        case REMOVE_USER:
            localStorage.setItem("userJWT","");
            return {
                ...state,
                ...initialState,
                JWT:""
            };
        default:
            return state;
    }
};

export const setAuthUserData = (JWT,isAuth,role,username) => ({type:SET_AUTH_USER_DATA,data:{JWT,isAuth,role,username}});

export const setUserInfo = (firstName,lastName,middleName,position,avatarImage) => (
    {type:SET_USER_INFO,data:{firstName,lastName,middleName,position,avatarImage}}
    );

export const deleteUserFromState = ()=> ({type:REMOVE_USER});

export const me = () => (dispatch) =>{
      let jwtFromLocalStorage = localStorage.getItem("userJWT");
      if(jwtFromLocalStorage!==null && jwtFromLocalStorage.length > 0){
          AuthAPI.checkJWT(jwtFromLocalStorage)
              .then(response => {
                  let username = response.data.userName;
                  AuthAPI.getUserInfo(username,jwtFromLocalStorage)
                      .then(response=>{
                          dispatch(setUserInfo(
                              response.data.firstName,
                              response.data.lastName,
                              response.data.middleName,
                              response.data.position,
                              response.data.avatarImage
                          ));
                          dispatch(setAuthUserData(jwtFromLocalStorage,true,response.data.userRole,username));
                          console.log("here");
                      })
                      .catch(error=>{
                          console.log(error);
                      })

              })
              .catch(error =>{
                  console.log(error);
                  localStorage.setItem("userJWT","");
                  dispatch(setAuthUserData(null,false,null,null));
                  dispatch(setUserInfo(null,null,null,null,null));
              })
      } else {
          console.log("jwt==0");
      }
};

export const login = (email,password) => (dispatch) =>{

    AuthAPI.loginOnServer(email,password)
        .then(response=>{
            if(response.data.success === true){
                localStorage.setItem('userJWT',response.data.token);
                dispatch(setAuthUserData(response.data.token,true,response.data.userRole,response.data.username));
            }
        })
        .catch(error => {
            if(error.data!==undefined){
                if(error.response.data.toString() === "Email/password incorrect"){
                    dispatch(stopSubmit("login",{_error:"Неверный email или пароль"}));
                }else {
                    dispatch(stopSubmit("login",{_error:error.response.data}));
                }
            }else {
                dispatch(stopSubmit("login",{_error:"Сервер не отвечает"}));
            }

        });
};

export const logout = () => (dispatch) =>{
    localStorage.setItem("userJWT","");
    dispatch(setAuthUserData(null,false,null,null));
    dispatch(setUserInfo(null,null,null,null,null));
};

export default authReducer;