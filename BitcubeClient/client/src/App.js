import React, { useReducer, useEffect } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import AuthContext from './context/AuthContext';
import Navbar from './components/Navbar';
import Routes from './Routes';

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
        <Routes />
      </Switch>
    </AuthContext.Provider>
    </Router>
  </ThemeProvider>
  );
}

export default App;
