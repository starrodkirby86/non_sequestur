import * as types from './AppActionTypes';
import { push } from 'react-router-redux';

export const appReducer = (state = [], action) => {
  switch (action.type) {
    case types.APP_CHANGE_SIDEBAR_VISIBILITY: {
      return appChangeSidebarVisibility(state);
    }
    case types.APP_CHANGE_PAGE: {
      return appChangePage(state, action);
    }
    default: {
      return state;
    }
  }
};

// TODO: Fix this bug where using this reducer actually ruins the history.
// Something here is affecting the router, badly.
// For now, don't use this.
const appChangeSidebarVisibility = (state) => {
  return {
    ...state,
    visible: !state.visible,
  };
};

// Probably not necessary
const appChangePage = (state, action) => {
  push(action.to);
  return state;
};

export default appReducer;