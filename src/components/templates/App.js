import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

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