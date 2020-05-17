import * as CommonAPI from "../../API/CommonAPI";
import * as AuthAPI from "../../API/AuthAPI";
import * as AdminAPI from "../../API/AdminAPI";

const SET_CURRENT_USER = "SET-CURRENT-USER";
const SET_CURRENT_USER_RATING = "SET-CURRENT-USER-RATING";
const SET_INTERECTED_USERS = "SET-INTERECTED-USERS";
const SET_USERS_FOR_INTERACT = "SET-USERS-FOR-INTERACT";
const DELETE_USER = "DELETE-USER";

const SET_USER_FIRST_NAME = "SET-USER-FIRST-NAME";
const SET_USER_LAST_NAME = "SET-USER-LAST-NAME";
const SET_USER_MIDDLE_NAME = "SET-USER-MIDDLE-NAME";
const SET_USER_EMAIL = "SET-USER-EMAIL";


let initialState = {
    currentUser: {
        username: "",
        firstName: "",
        middleName: "",
        lastName: "",
        position: "",
        email: "",
        avatarImage: undefined,
    },
    currentUserRating: {
        currentRating: "",
        scorePerCriterion: [],
    },
    interectedUsers: [],
    usersForInteract: [],
};

const adminProfilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.data,
            };
        case SET_CURRENT_USER_RATING:
            return {
                ...state,
                currentUserRating: action.data,
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
        case DELETE_USER:
            return {
                ...state,
                ...initialState
            };
        case SET_USER_FIRST_NAME:
            return {
                ...state,
                currentUser: {
                    ...state.currentUser,
                    firstName:action.data.newFirstName,
                }
            };
        case SET_USER_LAST_NAME:
            return {
                ...state,
                currentUser: {
                    ...state.currentUser,
                    lastName:action.data.newLastName,
                }
            };
        case SET_USER_MIDDLE_NAME:
            return {
                ...state,
                currentUser: {
                    ...state.currentUser,
                    middleName:action.data.newMiddleName,
                }
            };
        default:
            return state;
    }
};

const setCurrentUserData = (username, firstName, middleName, lastName, position, email, avatarImage) =>
    ({type: SET_CURRENT_USER, data: {username, firstName, middleName, lastName, position, email, avatarImage}});

const setCurrentUserRating = (commonRating, scorePerCriterion) =>
    ({type: SET_CURRENT_USER_RATING, data: {commonRating, scorePerCriterion}});

const setUserFirstName = (newFirstName) => ({type: SET_USER_FIRST_NAME, data: {newFirstName}});
const setUserLastName = (newLastName) => ({type: SET_USER_LAST_NAME, data: {newLastName}});
const setUserMiddleName = (newMiddleName) => ({type: SET_USER_MIDDLE_NAME, data: {newMiddleName}});
const setUserEmail = (newEmail) => ({type: SET_USER_EMAIL, data: {newEmail}});

const deleteUserFromState = () => ({type: DELETE_USER});

const setInterectedUsers = (users) => ({type: SET_INTERECTED_USERS, data: users});

const setUsersForInteract = (users) => ({type: SET_USERS_FOR_INTERACT, data: users});

export const getUserInfoFromServer = (username, jwt) => (dispatch) => {
    AuthAPI.getUserInfo(username, jwt)
        .then(response => {
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
        .catch(error => {
            console.log(error);
        })
};

export const getCurrentUserRatingFromServer = (username, jwt) => (dispatch) => {
    CommonAPI.getUserRating(username, jwt)
        .then(response => {
            dispatch(setCurrentUserRating(response.data.currentRating, response.data.scorePerCriterion));
        })
        .catch(error => {
            dispatch(setCurrentUserRating(0, []));
            console.log(error);
        })
};

export const getInterectedUsersFromServer = (username, jwt) => (dispatch) => {
    CommonAPI.getInterectedUsers(username, jwt)
        .then(response => {
            dispatch(setInterectedUsers(response.data));
        })
        .catch(error => {
            console.log(error);
        })
};

export const getUsersForInteractFromServer = (username, jwt) => (dispatch) => {
    AdminAPI.getUsersForInteract(username, jwt)
        .then(response => {
            dispatch(setUsersForInteract(response.data));
        })
        .catch(error => {
            console.log(error);
        })
};

export const changeUserDataOnServer = (username, jwt, changeRequest) => (dispatch) => {

    if (changeRequest.firstName) {
        AdminAPI.changeUserFirstName(username, jwt, changeRequest.firstName)
            .then(response => {
                console.log(response.data);
                dispatch(setUserFirstName(changeRequest.firstName));

            })
            .catch(error => {
                if (error.data) {
                    //заменить на stopConfirm
                    console.log(error.data);
                }
            });
    }

    if (changeRequest.lastName) {
        AdminAPI.changeUserLastName(username, jwt, changeRequest.lastName)
            .then(response => {
                console.log(response.data)
            })
            .catch(error => {
                if (error.data) {
                    //заменить на stopConfirm
                    console.log(error.data);
                }
            });
    }

    if (changeRequest.middleName) {
        AdminAPI.changeUserMiddleName(username, jwt, changeRequest.middleName)
            .then(response => {
                console.log(response.data)
            })
            .catch(error => {
                if (error.data) {
                    //заменить на stopConfirm
                    console.log(error.data);
                }
            })
    }

    if (changeRequest.position) {
        AdminAPI.changeUserPosition(username, jwt, changeRequest.position)
            .then(response => {
                console.log(response.data)
            })
            .catch(error => {
                if (error.data) {
                    //заменить на stopConfirm
                    console.log(error.data);
                }
            })
    }

    if (changeRequest.email) {
        AdminAPI.changeUserEmail(username, jwt, changeRequest.email)
            .then(response => {
                console.log(response.data)
            })
            .catch(error => {
                if (error.data) {
                    //заменить на stopConfirm
                    console.log(error.data);
                }
            })
    }

    if (changeRequest.newPassword) {
        AdminAPI.changeUserPassword(username, jwt, changeRequest.oldPassword, changeRequest.newPassword)
            .then(response => {
                console.log(response.data)
            })
            .catch(error => {
                if (error.data) {
                    //заменить на stopConfirm
                    console.log(error.data);
                }
            })
    }

};

export const deleteUserOnServer = (username, jwt) => (dispatch) => {
    AdminAPI.deleteUser(username, jwt)
        .then(response => {
            console.log(response.data);
            dispatch(deleteUserFromState());
        })
        .catch(error => {
            console.log(error);
        });
};

export const addCommunicationBtwUsers = (username, jwt, interactUserName) => (dispatch) => {
    AdminAPI.addCommunicationBtwUsers(username, jwt, [interactUserName])
        .then(response => {
            console.log(response.data);

            CommonAPI.getInterectedUsers(username, jwt)
                .then(response => {
                    dispatch(setInterectedUsers(response.data));
                })
                .catch(error => {
                    console.log(error);
                });

            AdminAPI.getUsersForInteract(username, jwt)
                .then(response => {
                    dispatch(setUsersForInteract(response.data));
                })
                .catch(error => {
                    console.log(error);
                });

        })
        .catch(error => {
            if (error.data) {
                console.log(error.data);
            }
        });
};

export const deleteCommunicationBtwUsersOnServer = (username, jwt, interactUserName) => (dispatch) => {
    AdminAPI.deleteCommunicationBtwUsers(username, jwt, interactUserName)
        .then(response => {
            console.log(response.data);

            CommonAPI.getInterectedUsers(username, jwt)
                .then(response => {
                    dispatch(setInterectedUsers(response.data));
                })
                .catch(error => {
                    console.log(error);
                });

            AdminAPI.getUsersForInteract(username, jwt)
                .then(response => {
                    dispatch(setUsersForInteract(response.data));
                })
                .catch(error => {
                    console.log(error);
                });
        })
        .catch(error => {
            if (error.data) {
                console.log(error.data)
            }
        });
};


export default adminProfilePageReducer;