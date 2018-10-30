/**
 * Root Component
 */
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import './App.css';

// Import Routes
import routes from './routes';

/**
* @type {Object} propTypes - prop type check
*/
const propTypes = {
  store: PropTypes.object.isRequired,
};

/**
* @param {Object} props - App props
* @param {Object} props.store - App redux store
* @param {Object} props.routes - App routes
*/
const App = (props) => {
  return (
    <Provider store={props.store}>
      <BrowserRouter>
        {routes}
      </BrowserRouter>
    </Provider>
  );
}

App.propTypes = propTypes; 

export default App; 