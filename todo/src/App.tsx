import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router';
import MainPage from './pages/MainPage';

const App: React.SFC = () => {
  return (
    <>
    <Switch>
      <Route path="/" component={MainPage} exact />
    </Switch>
    </>
  );
}

export default App;
