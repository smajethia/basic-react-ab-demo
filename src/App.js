import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Search from './pages/Search';
import Inbox from './pages/Inbox';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <h1>AB Experiment</h1>
          <Switch>
            <Route path="/" exact component={Search} />     
            <Route path="/inbox" exact component={Inbox} />     
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
