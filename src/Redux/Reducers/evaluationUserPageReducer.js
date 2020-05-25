import * as CommonAPI from "../../API/CommonAPI";

const SET_INTERACTED_USERS = "SET-INTERACTED-USERS";
const UPDATE_CURR_EVALUATE_USER_INDEX = "SET-CURR-EVALUATE-USER-INDEX";
const SET_IS_FETCHING = "SET-IS-FETCHING";

let initialState = {
    allInteractedUsers:[],
    currentEvaluateUserIndex:0,
    numOfUsers:0,
    finished:false,
    isFetching:false,
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
        case SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.data,
            };
        default:
            return state;
    }
};

const setInteractedUsers = (users) => ({type: SET_INTERACTED_USERS, data: users});

const updateCurrentEvaluateUserIndex = () => ({type: UPDATE_CURR_EVALUATE_USER_INDEX});

const setIsFetching =(flag)=>({type:SET_IS_FETCHING,data:flag});

export const getInteractedUsersWithCritsFromServer = (username,jwt)=>(dispatch)=>{
    CommonAPI.getInteractedUsersWithCrits(username,jwt)
        .then(response=>{
            dispatch(setInteractedUsers(response.data));
        })
        .catch(error=>{
            if(error.response.data){
                console.log(error.response.data)
            }else {
                console.log(error);
            }
        });
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