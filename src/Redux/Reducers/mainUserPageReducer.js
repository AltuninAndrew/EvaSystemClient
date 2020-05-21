import * as CommonAPI from "../../API/CommonAPI"

const SET_INTERACTED_USERS = "SET-INTERACTED-USERS";
const SET_USER_RATING = "SET-USER-RATING";


let initialState = {
    interactedUsers:[],
    userRating: {
        commonRating:0,
        scorePerCriterion: [],
    },
};

const mainUserPageReducer = (state = initialState,action) =>{
    switch (action.type) {
        case SET_INTERACTED_USERS:
            return {
                ...state,
                interactedUsers: action.data,
            };
        case SET_USER_RATING:
            return {
                ...state,
                userRating: action.data,
            };
        default:
            return state;
    }
};

const setInteractedUsers = (users) => ({type: SET_INTERACTED_USERS, data: users});
const setUserRating = (commonRating, scorePerCriterion) =>
    ({type: SET_USER_RATING, data: {commonRating, scorePerCriterion}});

export const getInteractedUsersFromServer = (username,jwt)=>(dispatch)=>{
    CommonAPI.getInterectedUsers(username,jwt)
        .then(response=>{
            dispatch(setInteractedUsers(response.data))
        })
        .catch(error=>{
            if(error.response.data){
                console.log(error.response.data)
            }else {
                console.log(error);
            }
        })
};

export const getUserRatingFromServer = (username,jwt) =>(dispatch)=>{
    CommonAPI.getUserRating(username,jwt)
        .then(response=>{
            dispatch(setUserRating(response.data.currentRating, response.data.scorePerCriterion));
        })
        .catch(error=>{
            if(error.response.data){
                dispatch(setUserRating(0, []));
                console.log(error.response.data)
            }else {
                console.log(error);
            }
        })
};

export default mainUserPageReducer;