import * as axios from "axios";
import * as CommonAPI from "../../API/CommonAPI";

const SET_INTERACTED_USERS = "SET-INTERACTED-USERS";
const UPDATE_CURR_EVALUATE_USER_INDEX = "SET-CURR-EVALUATE-USER-INDEX";

let initialState = {
    allInteractedUsers:[],
    currentEvaluateUserIndex:-1,
    numOfUsers:0,
    finished:false,
};

const evaluationUserPageReducer = (state=initialState, action) =>{
    switch (action.type) {
        case SET_INTERACTED_USERS:
            return {
                ...state,
                allInteractedUsers: action.data,
                numOfUsers: action.data.length,
            };
        case UPDATE_CURR_EVALUATE_USER_INDEX:
            let currIndex = state.currentEvaluateUserIndex + 1;
            if(currIndex >= state.numOfUsers){
                return {
                    ...state,
                    finished: true,
                }
            }else{
                return {
                    ...state,
                    currentEvaluateUserIndex: currIndex,
                };
            }
        default:
            return state;
    }
};

const setInteractedUsers = (users) => ({type: SET_INTERACTED_USERS, data: users});

const updateCurrentEvaluateUserIndex = () => ({type: UPDATE_CURR_EVALUATE_USER_INDEX});

export const getInteractedUsersWithCritsFromServer = (username,jwt)=>(dispatch)=>{
    CommonAPI.getInteractedUsersWithCrits(username,jwt)
        .then(response=>{
            dispatch(setInteractedUsers(response.data));
            dispatch(updateCurrentEvaluateUserIndex());
        })
        .catch(error=>{
            if(error.response.data){
                console.log(error.response.data)
            }else {
                console.log(error);
            }
        })
};

export const rateUserOnServer = (username,jwt,estimations) => (dispatch)=>{
    CommonAPI.rateUser(username,jwt,estimations)
        .then(response=>{
            dispatch(updateCurrentEvaluateUserIndex());
        })
        .catch(error=>{
            if(error.response.data){
                console.log(error.response.data)
            }else {
                console.log(error);
            }
        })
};


export default evaluationUserPageReducer;