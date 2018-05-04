import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Search from './pages/Search';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <h1>AB Experiment</h1>
          <Switch>
            <Route path="/" exact component={Search} />     
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
