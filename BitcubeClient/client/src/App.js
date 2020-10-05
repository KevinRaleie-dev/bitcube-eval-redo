import React, { useState, useMemo } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import LandingPage from './pages/LandingPage';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Navbar from './components/Navbar';
import AuthContext from './context/AuthContext';

function App() {

  const [user, setUser] = useState(null);

  const value = useMemo(() => ({
    user, 
    setUser
  }), [user, setUser])

  return (
  <ThemeProvider>
    <CSSReset />
    <Router>
      <AuthContext.Provider value={value}>
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
