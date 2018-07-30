import { Helmet } from 'react-helmet';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import * as AppActions from 'actions/AppActions';

@connect(state => ({
  appState: state.appReducer
}), dispatch => ({
  actions: bindActionCreators(AppActions, dispatch)
}))
export default class HomePage extends Component {
  static propTypes = {
    actions: PropTypes.object,
    appState: PropTypes.object,
    massage: PropTypes.string
  };

  componentDidMount() {
    if (!this.props.appState.message) {
      this.props.actions.testAction();
    }
  }

  render() {
    return (
      <div className="c-home-page-root">
        <Helmet>
          <title>App title</title>
        </Helmet>
        <div>
          <Link to="/another">
            Go to {this.props.appState.message} page
          </Link>
        </div>
      </div>
    );
  }
}
