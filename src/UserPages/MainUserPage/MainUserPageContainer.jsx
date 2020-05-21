import {connect} from "react-redux";
import MainUserPage from "./MainUserPage"
import React, {useEffect} from "react";
import {getInteractedUsersFromServer, getUserRatingFromServer} from "../../Redux/Reducers/mainUserPageReducer";

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        jwt: state.auth.JWT,
        userRole: state.auth.role,
        userName: state.auth.username,
        firstName: state.auth.userInfo.firstName,
        lastName: state.auth.userInfo.lastName,
        middleName: state.auth.userInfo.middleName,
        avatarImage: state.auth.userInfo.avatarImage,
        position: state.auth.userInfo.position,
        interactedUsers: state.mainUserPage.interactedUsers,
        userRating: state.mainUserPage.userRating,
    };
};

const MainUserPageContainerAPI = (props) => {

    useEffect(() => {
        if(props.isAuth){
            props.getUserRatingFromServer(props.userName, props.jwt);
            props.getInteractedUsersFromServer(props.userName, props.jwt);
        }
    }, [props.isAuth]);

    return <MainUserPage
        fullName={`${props.lastName} ${props.firstName} ${props.middleName}`}
        position={props.position}
        avatarImage={props.avatarImage}
        interactedUsers={props.interactedUsers}
        userRating={props.userRating}
    />
};

const MainUserPageContainer = connect(mapStateToProps, {
    getUserRatingFromServer,
    getInteractedUsersFromServer
})(MainUserPageContainerAPI);

export default MainUserPageContainer;