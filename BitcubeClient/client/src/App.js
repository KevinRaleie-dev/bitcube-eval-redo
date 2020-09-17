import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={LandingPage} exact />
        <Route path='/home' component={Home}  exact />
        <Route path='/register' component={Register} exact />
        <Route path='/login' component={Login} exact />
        <Route path='/profile' component={Profile} exact />
      </Switch>
    </Router>
  );
}

export default App;
