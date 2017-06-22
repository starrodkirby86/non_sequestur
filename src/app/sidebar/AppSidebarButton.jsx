import React from 'react';
import PropTypes from 'prop-types';
import { Menu, Icon } from 'semantic-ui-react';

export const AppSidebarButton = (props) => (
  <Menu.Item name={props.name}>
    <Icon name={props.name}/>
    {props.label}
  </Menu.Item>
);

AppSidebarButton.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default AppSidebarButton;