import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import NavBar from './components/layout/NavBar';
import Home from './components/pages/Home';
import PokeDateils from './components/dateils/PokeDateils';
import backgroundImage from './components/assets/container_bg.png';

export default class App extends Component {
  
  
  render() {

    return(
      <Router>
        <div className="App" style={{ background: `url(${backgroundImage})` }}>
          <NavBar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/pokemon/:pokemonIndex" component={PokeDateils} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
