import * as AdminAPI from "../../API/AdminAPI";
import {stopSubmit} from "redux-form";

const SET_USERS = 'SET-USERS';

let initialState = {
    users: []
};

const adminReducer = (state = initialState, action) => {

    if (action.type === SET_USERS) {
        let newUsers = action.users.map((user) => ({
            firstName: user.firstName,
            middleName: user.middleName,
            lastName: user.lastName,
            email: user.email,
            avatar: user.avatarImage,
            position: user.position,
            login: user.username,
        }));

        return {
            ...state,
            users: newUsers,
        }

    } else {
        return state;
    }

};


export const setUsers = (users) => ({type: SET_USERS, users: users});

export const getUsersFromServer = (jwt) => {
    return (dispatch) => {
        AdminAPI.getUsers(jwt).then((data) =>
            dispatch(setUsers(data)),
        );
    }
};


export const regNewUserInServer = (jwt,email,password,firstName,middleName,lastName,position) => (dispatch)=> {
    AdminAPI.regUser(jwt,email,password,firstName,middleName,lastName,position)
        .then(response=>{
            if(response.data.success===true)
            {
                AdminAPI.getUsers(jwt).then((data) =>
                    dispatch(setUsers(data)),
                );
            }
        }).catch(error=>{
            if(error.response!==undefined){
                dispatch(stopSubmit("regUser",{_error:error.response.data}));
            } else {
                dispatch(stopSubmit("regUser",{_error:"Сервер не отвечает"}));
            }
    });

};

export default adminReducer;

