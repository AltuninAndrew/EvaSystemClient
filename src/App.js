import React from 'react';
import classes from './App.module.css';
import Auth from './AuthPage/Auth'
import {Redirect, Route} from "react-router-dom";
import AdminProfilePageContainer from "./AdminPages/AdminProfilePage/AdminProfilePageContainer";
import MainAdminPageContainer from "./AdminPages/MainAdminPage/MainAdminPageContainer";
import {connect} from "react-redux";
import {deleteUserFromState, me} from "./Redux/Reducers/authReducer";
import MainUserPageContainer from "./UserPages/MainUserPage/MainUserPageContainer";
import CriterionsEditingPageContainer from "./AdminPages/CrtiterionsEditingPage/CriterionsEditingPageContainer";

const Redirector = (props) =>{
    if(props.isAuth===false){
        if(props.jwt!==""){
            props.me();
        }else {
            return <Redirect to={"/"}/>
        }
    }
    return (
        <div>
        </div>
    )

};

const Header = (props) => {
    return (
        <div className={classes.app_header}>
            <div className={classes.app_header_text}>
                EvaSystem
            </div>
            {props.isAuth &&
            <div className={classes.btn_wrapper}>
                <button className={classes.login_button} onClick={props.logOut}>Выйти</button>
            </div>}
        </div>
    );
};

const App = (props) => {
    return (
        <div>
            <Header isAuth={props.isAuth} logOut = {props.deleteUserFromState}/>
            <Redirector isAuth={props.isAuth} me={props.me} jwt={props.jwt} userRole={props.userRole}/>
            <Route exact path={["/", "/auth"]} component={Auth}/>
            <Route exact path='/admin' render={() => <MainAdminPageContainer/>}/>
            <Route exact path='/admin/profile_page/:userId' render={()=><AdminProfilePageContainer/>}/>
            <Route exact path='/admin/criterions' component={CriterionsEditingPageContainer}/>
            <Route exact path={'/user'} render={() => <MainUserPageContainer/>}/>
        </div>
    );
};

let mapsStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        jwt:state.auth.JWT,
        userRole:state.auth.role,
    };
};


export default connect(mapsStateToProps, {deleteUserFromState,me})(App);

