import React from 'react';
import PropTypes from 'prop-types';
import AppBanner from './AppBanner';
import AppMain from "./AppMain";
import { mapStateToAppProps, mapDispatchToAppProps } from './AppConnectLogic';
import { connect } from 'react-redux';

const AppStructure = (props) => (
  <div>
    <AppBanner onClick={props.onClick} />
    <AppMain visible={props.visible} />
  </div>
);

AppStructure.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export const AppContainer = connect(
  mapStateToAppProps,
  mapDispatchToAppProps,
)(AppStructure);