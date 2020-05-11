import React from 'react';
import classes from './App.module.css';
import Auth from './AuthPage/Auth'
import {Route} from "react-router-dom";
import AdminProfilePage from "./AdminPages/AdminProfilePage/AdminProfilePage";
import CriterionsEditingPage from "./AdminPages/CrtiterionsEditingPage/CriterionsEditingPage";
import MainAdminPageContainer from "./AdminPages/MainAdminPage/MainAdminPageContainer";
import {connect} from "react-redux";
import {logout} from "./Redux/Reducers/authReducer";
import MainUserPageContainer from "./UserPages/MainUserPage/MainUserPageContainer";


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
            <Header isAuth={props.isAuth} logOut = {props.logout}/>
            <Route exact path={["/", "/auth"]} component={Auth}/>
            <Route exact path='/admin' render={() => <MainAdminPageContainer/>}/>
            <Route exact path='/admin/profile_page/:userId' component={AdminProfilePage}/>
            <Route exact path='/admin/criterions' component={CriterionsEditingPage}/>
            <Route exact path={'/user'} render={() => <MainUserPageContainer/>}/>
        </div>
    );
};

let mapsStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
    };
};


export default connect(mapsStateToProps, {logout})(App);

