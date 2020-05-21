import {connect} from "react-redux";
import React, {useEffect} from "react";
import {Redirect, withRouter} from "react-router-dom";
import AdminProfilePage from "./AdminProfilePage";
import {
    addCommunicationBtwUsersOnServer,
    changeUserDataOnServer, deleteCommunicationBtwUsersOnServer, deleteUserOnServer,
    getCurrentUserRatingFromServer, getInterectedUsersFromServer,
    getUserInfoFromServer, getUsersForInteractFromServer, resetUserInState, setUserNameInState
} from "../../Redux/Reducers/adminProfilePageReducer";

let mapStateToProps = (state) => {
    return {
        userRole: state.auth.role,
        jwt: state.auth.JWT,
        isAuth: state.auth.isAuth,
        adminUserName:state.auth.username,
        currentUserRating: state.profilePage.currentUserRating,
        lastName:state.profilePage.currentUser.lastName,
        firstName:state.profilePage.currentUser.firstName,
        middleName:state.profilePage.currentUser.middleName,
        avatarImage:state.profilePage.currentUser.avatarImage,
        position:state.profilePage.currentUser.position,
        email:state.profilePage.currentUser.email,
        username:state.profilePage.currentUser.username,
        isUserDeleted: state.profilePage.isUserDeleted,
        interectedUsers: state.profilePage.interectedUsers,
        usersForInteract:state.profilePage.usersForInteract,
    };
};


const AdminProfilePageContainerAPI = (props) => {

    useEffect(() => {
        let userName = props.match.params.userId;
        props.setUserNameInState(userName);
        props.getUserInfoFromServer(userName,props.jwt);
        props.getCurrentUserRatingFromServer(userName,props.jwt);
        props.getInterectedUsersFromServer(userName,props.jwt);
        props.getUsersForInteractFromServer(userName,props.jwt);
    }, []);


    if (props.userRole !== "admin" && props.isAuth) {
        return <Redirect to={"/user"}/>
    }


    if((props.username)&&(props.username !== props.match.params.userId))
    {
        return <Redirect to={`/admin/profile_page/${props.username}`}/>
    }

    if(props.isUserDeleted){
        props.resetUserInState();
        return <Redirect to={'/admin'}/>
    }

    if (props.userRole === "admin") {

        return <AdminProfilePage
            scorePerCriterion={props.currentUserRating.scorePerCriterion}
            lastName={props.lastName}
            firstName={props.firstName}
            middleName={props.middleName}
            avatarImage={props.avatarImage}
            position={props.position}
            email={props.email}
            currentRating={props.currentUserRating.commonRating}
            changeUserData={props.changeUserDataOnServer}
            jwt={props.jwt}
            username={props.match.params.userId}
            adminUserName={props.adminUserName}
            deleteUser={props.deleteUserOnServer}
            usersForInteract={props.usersForInteract}
            interectedUsers={props.interectedUsers}
            addCommunication={props.addCommunicationBtwUsersOnServer}
            deleteCommunication={props.deleteCommunicationBtwUsersOnServer}
        />
    }

    return <div>
    </div>
};


const AdminProfilePageContainer = connect(mapStateToProps, {
    getUserInfoFromServer,
    getCurrentUserRatingFromServer,
    changeUserDataOnServer,
    setUserNameInState,
    deleteUserOnServer,
    resetUserInState,
    getInterectedUsersFromServer,
    getUsersForInteractFromServer,
    addCommunicationBtwUsersOnServer,
    deleteCommunicationBtwUsersOnServer,
})(AdminProfilePageContainerAPI);

let AdminProfilePageContainerWR = withRouter(AdminProfilePageContainer);

export default AdminProfilePageContainerWR;