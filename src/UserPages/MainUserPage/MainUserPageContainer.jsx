import {connect} from "react-redux";
import MainUserPage from "./MainUserPage"
import React, {useEffect} from "react";
import {getInteractedUsersFromServer, getUserRatingFromServer} from "../../Redux/Reducers/mainUserPageReducer";
import {addAvatarImageOnServer} from "../../Redux/Reducers/authReducer";

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
        addAvatarImage={props.addAvatarImageOnServer}
    />
};

const MainUserPageContainer = connect(mapStateToProps, {
    getUserRatingFromServer,
    getInteractedUsersFromServer,
    addAvatarImageOnServer,
})(MainUserPageContainerAPI);

export default MainUserPageContainer;