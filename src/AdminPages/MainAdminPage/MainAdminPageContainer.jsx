import {connect} from "react-redux";
import MainAdminPage from "./MainAdminPage";
import {getUsersFromServer, regNewUser} from "../../Redux/Reducers/adminReducer";
import React, {useEffect} from "react";
import {me} from "../../Redux/Reducers/authReducer";
import {Redirect} from "react-router-dom";

let mapStateToProps = (state) =>{
    return {
        users:state.mainAdminPage.users,
        isAuth:state.auth.isAuth,
        jwt:state.auth.JWT,
        userRole:state.auth.role,
    };
};

const MainAdminPageContainerAPI = (props) =>{

    if(props.isAuth && props.userRole==="admin"){
        props.getUsersFromServer(props.jwt);
        console.log("das");
        return <MainAdminPage users={props.users} regNewUser ={props.regNewUser}/>
    }else {
        return <Redirect to={"/"}/>
    }


};

const MainAdminPageContainer = connect(mapStateToProps, {regNewUser,getUsersFromServer,me})(MainAdminPageContainerAPI);

export default MainAdminPageContainer;