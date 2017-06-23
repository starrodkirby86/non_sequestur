import React from 'react';
import PropTypes from 'prop-types';
import AppBanner from './AppBanner';
import AppMain from "./AppMain";
import createHistory from 'history/createBrowserHistory';
import { mapStateToAppProps, mapDispatchToAppProps } from './AppConnectLogic';
import { connect } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

const AppStructure = (props) => (
  <ConnectedRouter history={createHistory()}>
    <div>
      <AppBanner onClick={props.onClick}/>
      <AppMain visible={props.visible}/>
    </div>
  </ConnectedRouter>
);

AppStructure.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export const AppContainer = connect(
  mapStateToAppProps,
  mapDispatchToAppProps,
)(AppStructure);