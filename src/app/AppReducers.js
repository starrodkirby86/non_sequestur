import * as types from './AppActionTypes';

export const appReducer = (state = [], action) => {
  switch (action.type) {
    case types.APP_CHANGE_SIDEBAR_VISIBILITY: {
      return appChangeSidebarVisibility(state);
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

export default appReducer;