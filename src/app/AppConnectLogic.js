import { changeAppSidebarVisibility, changePage } from './AppActionCreators';

export const mapStateToAppProps = (state) => {
  const app = state.app;
  return {
    visible: app.visible,
  }
};

export const mapDispatchToAppProps = (dispatch) => ({
    onClick: () => (
      dispatch(changeAppSidebarVisibility())
    ),
  }
);

export const mapDispatchToSidebarProps = (dispatch) => ({
  onClick: (to) => {
    return dispatch(changePage(to))
  },
});