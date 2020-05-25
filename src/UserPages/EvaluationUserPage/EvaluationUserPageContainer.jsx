import {connect} from "react-redux";
import React, {useEffect} from "react";
import EvaluationUserPage from "./EvaluationUserPage";
import {getInteractedUsersWithCritsFromServer, rateUserOnServer} from "../../Redux/Reducers/evaluationUserPageReducer";
import FetchingPageComponent from "./InformationComponents/FetchingPageComponent";
import EvaluationFinishedComponent from "./InformationComponents/EvaluationFinishedComponent";

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        jwt: state.auth.JWT,
        userName: state.auth.username,
        evaUser:state.evaluationUserPage.allInteractedUsers[state.evaluationUserPage.currentEvaluateUserIndex],
        isFetching:state.evaluationUserPage.isFetching,
        finished:state.evaluationUserPage.finished,
        numOfUsers:state.evaluationUserPage.numOfUsers-(state.evaluationUserPage.currentEvaluateUserIndex)
    };
};

const EvaluationUserPageContainerAPI = (props) => {

    useEffect(() => {
        if(props.isAuth){
            props.getInteractedUsersWithCritsFromServer(props.userName,props.jwt);
        }
    }, [props.isAuth]);

    if(props.finished){
        return <EvaluationFinishedComponent/>
    }

    if(props.evaUser && props.evaUser.criterionsName){

        return <EvaluationUserPage
            fullName={`${props.evaUser.lastName} ${props.evaUser.firstName} ${props.evaUser.middleName}`}
            position={props.evaUser.position}
            email={props.evaUser.email}
            avatarImage={props.evaUser.avatarImage}
            evaUserName={props.evaUser.userName}
            criterions={props.evaUser.criterionsName}
            rateUser={props.rateUserOnServer}
            jwt={props.jwt}
            numOfUsers={props.numOfUsers}
        />
    }
    else {
        return <FetchingPageComponent/>
    }

};

const EvaluationUserPageContainer = connect(mapStateToProps, {
    getInteractedUsersWithCritsFromServer,
    rateUserOnServer,
})(EvaluationUserPageContainerAPI);

export default EvaluationUserPageContainer;