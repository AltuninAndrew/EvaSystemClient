import {connect} from "react-redux";
import MainAdminPage from "./MainAdminPage";
import {getUsersFromServer, regNewUser} from "../../Redux/adminReducer";
import React, {useEffect} from "react";

let mapStateToProps = (state) =>{
    return {
        users:state.mainAdminPage.users,
    };
};

const MainAdminPageContainerAPI = (props) =>{
    useEffect(() => {
        props.getUsersFromServer("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VyTmFtZSI6ImFkbWluIiwianRpIjoiMjQ5ZDBkYWItNmE3Yy00MGY1LTk2MmEtNDY5ZGNiMjRhNWM2IiwiZW1haWwiOiJhZG1pbkBleGFtcGxlLmNvbSIsIlJvbGUiOiJhZG1pbiIsImlkIjoiZTczZWRiNzMtNzg0ZC00NjYyLTlhYTAtMzBjMjUzNDVlMGUxIiwibmJmIjoxNTg5MDQ2ODQ1LCJleHAiOjE1ODkwNTQwNDUsImlhdCI6MTU4OTA0Njg0NX0.CsMeqTGFSU4xII0Cy3brWcktP8uOg7UJJb5DC5mFq_w");
    });

    return(
        <MainAdminPage users={props.users} regNewUser ={props.regNewUser}/>
    );
};

const MainAdminPageContainer = connect(mapStateToProps, {regNewUser,getUsersFromServer})(MainAdminPageContainerAPI);

export default MainAdminPageContainer;