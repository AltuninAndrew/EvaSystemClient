import React from 'react';
import './App.css';
import Auth from './AuthPage/Auth'
import {Route} from "react-router-dom";
import AdminProfilePage from "./AdminPages/AdminProfilePage/AdminProfilePage";
import MainUserPage from "./UserPages/MainUserPage/MainUserPage"
import CriterionsEditingPage from "./AdminPages/CrtiterionsEditingPage/CriterionsEditingPage";
import MainAdminPageContainer from "./AdminPages/MainAdminPage/MainAdminPageContainer";

const App = (props) => {
    return (
            <div>
                <header className='App-header'>
                    <div className='App-header_text'>
                        EvaSystem
                    </div>
                </header>
                <Route exact path={["/","/auth"]} component={Auth}/>
                <Route exact path='/admin' render={()=> <MainAdminPageContainer/>}/>
                <Route exact path='/admin/profile_page/:userId' component={AdminProfilePage}/>
                <Route exact path='/admin/criterions' component={CriterionsEditingPage}/>
                <Route exact path={'/user'} component={MainUserPage}/>
            </div>
    );
};

export default App;
