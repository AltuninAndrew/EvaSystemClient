import React from 'react';
import './App.css';
import Auth from './AuthPage/Auth'
import MainAdminPage from './AdminPages/MainAdminPage/MainAdminPage'
import {BrowserRouter, Route} from "react-router-dom";
import AdminProfilePage from "./AdminPages/AdminProfilePage/AdminProfilePage";
import MainUserPage from "./UserPages/MainUserPage/MainUserPage"
import CriterionsEditingPage from "./AdminPages/CrtiterionsEditingPage/CriterionsEditingPage";

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <header className='App-header'>
                    <div className='App-header_text'>
                        EvaSystem
                    </div>
                </header>

                <Route exact path={["/","/auth"]} component={Auth}/>
                <Route exact path='/admin' component={MainAdminPage}/>
                <Route exact path='/admin/profile_page/:userId' component={AdminProfilePage}/>
                <Route exact path='/admin/criterions' component={CriterionsEditingPage}/>
                <Route path={'/user'} component={MainUserPage}/>
            </div>
        </BrowserRouter>
    );
};

export default App;
