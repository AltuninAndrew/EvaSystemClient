import {connect} from "react-redux";
import React, {useEffect} from "react";
import {Redirect, withRouter} from "react-router-dom";
import AdminProfilePage from "./AdminProfilePage";

let mapStateToProps = (state) =>{
    return {
        userRole:state.auth.role,
        jwt:state.auth.JWT,
        isAuth:state.auth.isAuth
    };
};


const AdminProfilePageContainerAPI = (props) =>{

    useEffect(() => {

    }, []);


    if(props.userRole!=="admin" && props.isAuth){
        return <Redirect to={"/user"}/>
    }

    if(props.userRole==="admin")
    {
       return  <AdminProfilePage/>
    }

    return <div>
    </div>
};



const AdminProfilePageContainer = connect(mapStateToProps, null)(AdminProfilePageContainerAPI);

let AdminProfilePageContainerWR = withRouter(AdminProfilePageContainer);

export default AdminProfilePageContainerWR;