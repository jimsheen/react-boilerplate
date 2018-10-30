import { createStore, applyMiddleware } from 'redux'
// import thunk from 'redux-thunk';

import App from './reducers/';

// const enhancers = [
//   applyMiddleware(thunk),
// ];

let store = createStore(
  App,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  // applyMiddleware(thunk)
);

export default store;