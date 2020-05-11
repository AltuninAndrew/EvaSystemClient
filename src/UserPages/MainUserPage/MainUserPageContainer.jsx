import {connect} from "react-redux";
import MainUserPage from "./MainUserPage"
import React, {useEffect} from "react";
import {Redirect} from "react-router-dom";

let mapStateToProps = (state) =>{
    return {
        isAuth:state.auth.isAuth,
        jwt:state.auth.JWT,
        userRole:state.auth.role,
    };
};

const MainUserPageContainerAPI = (props) =>{

    if(props.isAuth && props.userRole.toString()==="user"){
        return <MainUserPage/>
    } else {
        return <Redirect to={"/"}/>
    }

};

const MainUserPageContainer = connect(mapStateToProps,null)(MainUserPageContainerAPI);

export default MainUserPageContainer;