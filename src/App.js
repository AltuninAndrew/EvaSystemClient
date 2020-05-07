import React from 'react';
import './App.css';
import Auth from './AuthPage/Auth'
import MainAdminPage from './AdminPages/MainAdminPage/MainAdminPage'
import {BrowserRouter, Route} from "react-router-dom";
import AdminProfilePage from "./AdminPages/AdminProfilePage/AdminProfilePage";
import MainUserPage from "./UserPages/MainUserPage/MainUserPage"
import CriterionsEditingPage from "./AdminPages/CrtiterionsEditingPage/CriterionsEditingPage";
import UserTestPage from "./UserTestPage/UserTestPage";
const App = (props) => {
    return (
        <BrowserRouter>
            <div>
                <header className='App-header'>
                    <div className='App-header_text'>
                        EvaSystem
                    </div>
                </header>

                <Route exact path={["/","/auth"]} component={Auth}/>
                <Route exact path='/admin' render={()=> <MainAdminPage state={props.state.mainAdminPage} dispatch={props.dispatch}/>}/>
                <Route exact path='/admin/profile_page/:userId' component={AdminProfilePage}/>
                <Route exact path='/admin/criterions' component={CriterionsEditingPage}/>
                <Route path={'/user'} component={MainUserPage}/>
                <Route path={'/userTest'} component={UserTestPage}/>
            </div>
        </BrowserRouter>
    );
};

export default App;
