import * as AdminAPI from "../../API/AdminAPI"
import {dataKey} from "redux-form/lib/util/eventConsts";

const SET_POSITIONS = "SET-POSITIONS";
const ADD_CRITERION = "ADD-CRITERION";
const OFF_IS_CHANGE = "OFF-IS-CHANGE";

let initialState = {
    positions:[],
    isCritsChanged:false,
};

const criterionsEditingPageReducer = (state = initialState,action) =>{
    switch (action.type) {
        case SET_POSITIONS:
            return {
                ...state,
                positions: action.data.positions
            };
        case ADD_CRITERION:
            let oldPos = state.positions;
            let index = oldPos.findIndex(e=>e.positionName===action.data.posName);
            oldPos[index].criterions.push({name:action.data.critName,weight:action.data.critWeight});
            return {
                ...state,
                positions:oldPos,
                isCritsChanged:true,
            };
        case OFF_IS_CHANGE:
            return {
                ...state,
                isCritsChanged:false,
            };
        default:
            return state;
    }
};

const setPositions = (positions) =>({type:SET_POSITIONS, data:{positions}});
const addCritToState = (posName,critName,critWeight) => ({type:ADD_CRITERION, data:{posName,critName,critWeight}});
const offIsChange = () =>({type:OFF_IS_CHANGE});

export const getPositionsFromServer= (jwt) =>(dispatch)=>{
    AdminAPI.getPositions(jwt)
        .then(response=>{
            dispatch(setPositions(response.data))
        })
        .catch(error=>{
            console.log(error);
        })
};

export const addCriterionOnServer = (jwt,positionName,criterionName,criterionWeight) =>(dispatch)=>{
    AdminAPI.addCriterions(jwt,positionName,criterionName,parseFloat(criterionWeight))
        .then(response=>{
            if(response.data.success === true){
                dispatch(addCritToState(positionName,criterionName,parseFloat(criterionWeight)));
            }else{
                alert(response.data.errorsMessages);
            }
        })
        .catch(error=>{
            console.log(error);
        })
};

export const offIsCritChange=()=> (dispatch) =>{
    dispatch(offIsChange());
};

export default criterionsEditingPageReducer;