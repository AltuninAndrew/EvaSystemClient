import React from 'react';
import './App.css';
import Auth from './Auth/Auth'
import MainAdminPage from './AdminPages/MainAdminPage'
import {BrowserRouter, Route} from "react-router-dom";
import AdminProfilePage from "./AdminPages/AdminProfilePage/AdminProfilePage";
import UserMainPage from "./UserPages/UserMainPage"

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
                <Route path={'/user'} component={UserMainPage}/>
            </div>
        </BrowserRouter>
    );
};

export default App;
