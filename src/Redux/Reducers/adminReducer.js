import * as AdminAPI from "../../API/AdminAPI";

const REG_NEW_USER = 'REG-NEW-USER';
const SET_USERS = 'SET-USERS';

let initialState = {
    users: []
};

const adminReducer = (state = initialState, action) => {
    if (action.type === REG_NEW_USER) {
        let newUser = {
            firstName: action.newUser.firstName,
            middleName: action.newUser.middleName,
            lastName: action.newUser.lastName,
            email: action.newUser.email,
            avatar: action.newUser.avatar,
            position: action.newUser.position,
            login: action.newUser.login
        };

        return {
            ...state,
            users: [...state.users, newUser],
        };

    } else if (action.type === SET_USERS) {
        let newUsers = action.users.map((user) => ({
            firstName: user.firstName,
            middleName: user.middleName,
            lastName: user.lastName,
            email: user.email,
            avatar: user.avatarImage,
            position: user.position,
            login: user.login
        }));

        return {
            ...state,
            users: newUsers,
        }

    } else {
        return state;
    }

};

export const regNewUser = (newUser) => ({type: REG_NEW_USER, newUser: newUser});
export const setUsers = (users) => ({type: SET_USERS, users: users});

export const getUsersFromServer = (jwt) => {
    return (dispatch) => {
       AdminAPI.getUsers(jwt).then((data) =>
            dispatch(setUsers(data)),
        );
    }
};

export default adminReducer;

