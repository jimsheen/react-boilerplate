import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

/**
 *
 * @class App - main application render
 *
 */

class App extends Component {

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}


export default withRouter(App);