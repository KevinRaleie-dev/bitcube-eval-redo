import React, { useReducer, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import LandingPage from './pages/LandingPage';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import AuthContext from './context/AuthContext';
import Navbar from './components/Navbar';

let reducer = (user, newUser) => {
  if (newUser === null) {
    localStorage.removeItem("user");
    return initialState;
  }

  return {...user, ...newUser};
}

const initialState = {
  Id: undefined,
  Email: undefined,
  FirstName: undefined,
  LastName: undefined
}

const localState = JSON.parse(localStorage.getItem('user'));

function App() {

  const [user, setUser] = useReducer(reducer, localState || initialState);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  return (
  <ThemeProvider>
    <CSSReset />
    <Router>
    <AuthContext.Provider value={{user, setUser}}>
      <Navbar />
      <Switch>
        <Route path='/' component={LandingPage} exact />
        <Route path='/home' component={Home}  exact />
        <Route path='/register' component={Register} exact />
        <Route path='/login' component={Login} exact />
        <Route path='/profile' component={Profile} exact />
      </Switch>
    </AuthContext.Provider>
    </Router>
  </ThemeProvider>
  );
}

export default App;
