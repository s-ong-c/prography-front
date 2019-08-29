import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router';

const App: React.SFC = () => {
  return (
    <Switch>
      <Route path="/" exact />
    </Switch>
  );
}

export default App;
