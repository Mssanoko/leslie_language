import React from 'react';
import './App.css'
import Welcome from './pages/welcome'
import Home from './pages/home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Welcome />
        </Route>
        <Route path="/home">
          <Home />
        </Route>

      </Switch> 
    </Router>

  );
}

export default App;
