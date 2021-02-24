import React from 'react';
import { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import AuthContext from './context/AuthContext';
import Home from './pages/Home';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';



const Routes = () => {
    const { user } = useContext(AuthContext);
    return (
        <>
            <Route path='/' exact>
                { Object.keys(user).length === 0 ? <LandingPage /> : <Redirect to='/home'/> }
            </Route>
            <Route path='/home' component={Home}  exact />
            <Route path='/register' component={Register} exact />
            <Route path='/login' component={Login} exact />
            <Route path='/profile' component={Profile} exact />
        </>
    );
}

export default Routes
