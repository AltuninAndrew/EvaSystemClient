import {connect} from "react-redux";
import MainAdminPage from "./MainAdminPage";
import {getUsersFromServer, regNewUser} from "../../Redux/Reducers/adminReducer";
import React, {useEffect} from "react";
import {me} from "../../Redux/Reducers/authReducer";
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
        console.log('da');
        return <Redirect to={"/user"}/>
    }

    if(props.userRole==="admin")
    {
        return <MainAdminPage users={props.users} regNewUser ={props.regNewUser}/>
    }

    return <div>
    </div>

};

const MainAdminPageContainer = connect(mapStateToProps, {regNewUser,getUsersFromServer})(MainAdminPageContainerAPI);

export default MainAdminPageContainer;