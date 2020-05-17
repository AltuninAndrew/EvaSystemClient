import {connect} from "react-redux";
import MainAdminPage from "./MainAdminPage";
import {getUsersFromServer, regNewUserInServer} from "../../Redux/Reducers/mainAdminPageReducer";
import React, {useEffect, useState} from "react";
import {Redirect} from "react-router-dom";

let mapStateToProps = (state) =>{
    return {
        users:state.mainAdminPage.users,
        userRole:state.auth.role,
        jwt:state.auth.JWT,
        isAuth:state.auth.isAuth
    };
};




const MainAdminPageContainerAPI = (props) =>{

    useEffect(() => {
        props.getUsersFromServer(props.jwt);
    }, []);


    if(props.userRole!=="admin" && props.isAuth){
        return <Redirect to={"/user"}/>
    }

    if(props.userRole==="admin"){
        return <MainAdminPage
            users={props.users}
            regNewUserInServer={props.regNewUser}
            jwt={props.jwt}
        />
    }


    return <div>
    </div>
};

const MainAdminPageContainer = connect(mapStateToProps, {regNewUser: regNewUserInServer,getUsersFromServer})(MainAdminPageContainerAPI);

export default MainAdminPageContainer;