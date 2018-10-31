// import { createStore, applyMiddleware } from 'redux'
// import thunk from 'redux-thunk';

// import App from './reducers/';

// const enhancers = [
//   applyMiddleware(thunk),
// ];

// let store = createStore(
//   App,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
//   applyMiddleware(thunk)
// );

// export default store;


import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import App from './reducers';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  App,
  composeEnhancer(applyMiddleware(thunk)),
);

export default store;