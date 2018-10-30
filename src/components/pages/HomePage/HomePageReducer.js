/**
 * REDUCER - For reference only, not production code
 */

import { handleActions } from 'redux-actions';

import { types } from '../../../actions';

const homePage = handleActions(
  {
    [types.HOME_PAGE_ACTION] (state, action) {
      return { ...state, homePage: false };
    },
  }, {
  homePage: true
});

export default homePage;
