/**
 * ACTIONS - For reference only, not production code
 */

import { createActions } from 'redux-actions';

import { homePage } from './HomePageActions';

const types = Object.assign({},
  homePage
);

const actions = createActions(
  ...Object.keys(types).map(type => types[type])
);

export default actions;
export { types };
