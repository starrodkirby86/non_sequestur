import * as types from './UserActionTypes';

export const changeAvatar = (id) => ({
  type: types.USER_CHANGE_AVATAR,
  id: id,
});