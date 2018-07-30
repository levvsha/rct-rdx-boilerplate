import './App.styl';

import React, { Component } from 'react';
import Type from 'prop-types';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import AppContainer from 'containers/AppContainer';
import DummyComponent from 'components/DummyComponent';

export default class App extends Component {
  static propTypes = {
    children: Type.array
  }

  render() {
    return (
      <div className="app">
        <Router>
          <Switch>
            <Route key="/" exact={true} path="/" component={AppContainer}/>
            <Route key="/another" exact={true} path="/another" component={DummyComponent} />
          </Switch>
        </Router>
      </div>
    );
  }
}
