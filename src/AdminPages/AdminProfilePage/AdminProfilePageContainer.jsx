import {connect} from "react-redux";
import React, {useEffect} from "react";
import {Redirect, withRouter} from "react-router-dom";
import AdminProfilePage from "./AdminProfilePage";
import {
    changeUserDataOnServer,
    getCurrentUserRatingFromServer,
    getUserInfoFromServer
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
    };
};


const AdminProfilePageContainerAPI = (props) => {

    useEffect(() => {
        let userName = props.match.params.userId;
        props.getUserInfoFromServer(userName,props.jwt);
        props.getCurrentUserRatingFromServer(userName,props.jwt);
    }, []);


    if (props.userRole !== "admin" && props.isAuth) {
        return <Redirect to={"/user"}/>
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
            currentRating={props.currentUserRating.currentRating}
            changeUserData={props.changeUserDataOnServer}
            jwt={props.jwt}
            username={props.match.params.userId}
        />
    }

    return <div>
    </div>
};


const AdminProfilePageContainer = connect(mapStateToProps, {
    getUserInfoFromServer,
    getCurrentUserRatingFromServer,
    changeUserDataOnServer
})(AdminProfilePageContainerAPI);

let AdminProfilePageContainerWR = withRouter(AdminProfilePageContainer);

export default AdminProfilePageContainerWR;