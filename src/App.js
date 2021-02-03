import React from 'react';
import './App.css'
import Home from './pages/home'
import About from './pages/about'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>

      </Switch> 
    </Router>

  );
}

export default App;
