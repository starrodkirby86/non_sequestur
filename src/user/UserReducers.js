import * as types from './UserActionTypes';

export const UserReducers = (state = [], action) => {
  switch (action.type) {
    case types.USER_CHANGE_AVATAR: {
      return changeAvatar(state, action);
    }
    default: {
      return state;
    }
  }
};

const changeAvatar = (state, action) => {
  return {
    ...state,
    avatar: action.id,
  };
};

export default UserReducers;