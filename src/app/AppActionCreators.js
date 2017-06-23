import * as types from './AppActionTypes';

export const changeAppSidebarVisibility = () => ({
  type: types.APP_CHANGE_SIDEBAR_VISIBILITY,
});

export const changePage = (to) => ({
  type: types.APP_CHANGE_PAGE,
  to: to,
});