import { changeAvatar } from './UserActionCreators';

export const mapStateToUserProps = (state) => {
  const user = state.user;
  return {
    avatar: user.avatar,
  }
};

export const mapDispatchToAvatarFormProps = (dispatch) => ({
  onFormSubmit: (id) => {
    dispatch(changeAvatar(id))
  },
});