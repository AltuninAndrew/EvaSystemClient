import {connect} from "react-redux";
import MainUserPage from "./MainUserPage"
import React from "react";
import {Redirect} from "react-router-dom";
import {me} from "../../Redux/Reducers/authReducer";

let mapStateToProps = (state) =>{
    return {
        isAuth:state.auth.isAuth,
        jwt:state.auth.JWT,
        userRole:state.auth.role,
    };
};

const MainUserPageContainerAPI = (props) =>{
    return <MainUserPage/>
};

const MainUserPageContainer = connect(mapStateToProps,{me})(MainUserPageContainerAPI);

export default MainUserPageContainer;