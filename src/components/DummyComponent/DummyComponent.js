import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class DummyComponent extends Component {
  /**
   * Validates passed properties
   */
  static propTypes = {};

  /**
   * Renders 'DummyComponent' component
   */
  render() {
    return (
      <div>
        <Link to="/">
          Go to main page.
        </Link>
      </div>
    );
  }
}
