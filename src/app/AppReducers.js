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

const appChangeSidebarVisibility = (state) => {
  return {
    ...state,
    visible: !state.visible,
  };
};

const appChangePage = (state, action) => push(action.to);

export default appReducer;