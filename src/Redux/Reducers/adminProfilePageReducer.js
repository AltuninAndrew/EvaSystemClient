import * as CommonAPI from "../../API/CommonAPI";
import * as AuthAPI from  "../../API/AuthAPI";
import * as AdminAPI from  "../../API/AdminAPI";

const SET_CURRENT_USER = "SET-CURRENT-USER";
const SET_CURRENT_USER_RATING = "SET-CURRENT-USER-RATING";
const SET_INTERECTED_USERS = "SET-INTERECTED-USERS";
const SET_USERS_FOR_INTERACT = "SET-USERS-FOR-INTERACT";

let initialState = {
    currentUser:{
        username:"",
        firstName:"",
        middleName:"",
        lastName:"",
        position:"",
        email:"",
        avatarImage:undefined,
    },
    currentUserRating:{
        currentRating:"",
        scorePerCriterion:[],
    },
    interectedUsers:[],
    usersForInteract:[],
};

const adminProfilePageReducer = (state = initialState, action) =>{
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                currentUser:action.data,
            };
        case SET_CURRENT_USER_RATING:
            return {
                ...state,
                currentUserRating:action.data,
            };
        case SET_INTERECTED_USERS:
            return {
                ...state,
                interectedUsers: action.data,
            };
        case SET_USERS_FOR_INTERACT:
            return {
                ...state,
                usersForInteract: action.data,
            };
        default:
            return state;
    }
};

const setCurrentUserData =(username,firstName,middleName,lastName,position,email,avatarImage) =>
    ({type:SET_CURRENT_USER,data:{username,firstName,middleName,lastName,position,email,avatarImage}});

const setCurrentUserRating = (commonRating,scorePerCriterion) =>
    ({type:SET_CURRENT_USER_RATING,data:{commonRating,scorePerCriterion}});

const setInterectedUsers = (users) =>({type:SET_INTERECTED_USERS,data:users});

const setUsersForInteract = (users) =>({type:SET_USERS_FOR_INTERACT,data:users});

export const getUserInfoFromServer = (username,jwt) => (dispatch) =>{
    AuthAPI.getUserInfo(username,jwt)
        .then(response =>{
            dispatch(setCurrentUserData(
                username,
                response.data.firstName,
                response.data.middleName,
                response.data.lastName,
                response.data.position,
                response.data.email,
                response.data.avatarImage
            ))
        })
        .catch(error=>{
            console.log(error);
        })
};

export const getCurrentUserRatingFromServer = (username,jwt) => (dispatch) =>{
    CommonAPI.getUserRating(username,jwt)
        .then(response=>{
            dispatch(setCurrentUserRating(response.data.currentRating,response.data.scorePerCriterion));
        })
        .catch(error=>{
            console.log(error);
        })
};

export const getInterectedUsersFromServer = (username,jwt) => (dispatch) =>{
    CommonAPI.getInterectedUsers(username,jwt)
        .then(response=>{
            dispatch(setInterectedUsers(response.data));
        })
        .catch(error =>{
            console.log(error);
        })
};

export const getUsersForInteractFromServer = (username,jwt) => (dispatch) =>{
    AdminAPI.getUsersForInteract(jwt,username)
        .then(response=>{
            dispatch(setUsersForInteract(response.data));
        })
        .catch(error=>{
            console.log(error);
        })
};

export const changeUserDataOnServer = (username,jwt,changeRequest) => (dispatch) =>{

    let errorCount = 0;

    if(changeRequest.firstName){
        AdminAPI.changeUserFirstName(jwt,username,changeRequest.firstName)
            .then(response=>{
                console.log(response.data)
            })
            .catch(error=>{
                if(error.data){
                    //заменить на stopConfirm
                    console.log(error.data);
                    errorCount++;
                }
            });
    }

    if(changeRequest.lastName){
        AdminAPI.changeUserLastName(jwt,username,changeRequest.lastName)
            .then(response=>{
                console.log(response.data)
            })
            .catch(error=>{
                if(error.data){
                    //заменить на stopConfirm
                    console.log(error.data);
                    errorCount++;
                }
            });
    }

    if(changeRequest.middleName){
        AdminAPI.changeUserMiddleName(jwt,username,changeRequest.middleName)
            .then(response=>{
                console.log(response.data)
            })
            .catch(error=>{
                if(error.data){
                    //заменить на stopConfirm
                    console.log(error.data);
                    errorCount++;
                }
            })
    }

    if(changeRequest.position){
        AdminAPI.changeUserPosition(jwt,username,changeRequest.position)
            .then(response=>{
                console.log(response.data)
            })
            .catch(error=>{
                if(error.data){
                    //заменить на stopConfirm
                    console.log(error.data);
                    errorCount++;
                }
            })
    }

    if(changeRequest.email){
        AdminAPI.changeUserEmail(jwt,username,changeRequest.email)
            .then(response=>{
                console.log(response.data)
            })
            .catch(error=>{
                if(error.data){
                    //заменить на stopConfirm
                    console.log(error.data);
                    errorCount++;
                }
            })
    }

    if(changeRequest.newPassword){
        AdminAPI.changeUserPassword(jwt,username,changeRequest.oldPassword,changeRequest.newPassword)
            .then(response=>{
                console.log(response.data)
            })
            .catch(error=>{
                if(error.data){
                    //заменить на stopConfirm
                    console.log(error.data);
                    errorCount++;
                }
            })
    }

    if(errorCount===0){
        AuthAPI.getUserInfo(username,jwt)
            .then(response =>{
                dispatch(setCurrentUserData(
                    username,
                    response.data.firstName,
                    response.data.middleName,
                    response.data.lastName,
                    response.data.position,
                    response.data.email,
                    response.data.avatarImage
                ))
            })
            .catch(error=>{
                console.log(error);
            })
    }

};

export const deleteUserOnServer = (username,jwt) => (dispatch) =>{
    AdminAPI.deleteUser(jwt,username)
        .then(response=>{
            console.log(response.data);
        })
        .catch(error =>{
            console.log(error);
        });
};

export default adminProfilePageReducer;