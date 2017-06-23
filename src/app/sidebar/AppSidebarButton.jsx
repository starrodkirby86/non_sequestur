import React from 'react';
import PropTypes from 'prop-types';
import { Menu, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { mapDispatchToSidebarProps } from '../AppConnectLogic';
import { connect } from 'react-redux';


export class AppSidebarButton extends React.Component {

  render() {
    return (
      <Menu.Item
        as={ Link }
        to={this.props.to}
        onClick={() => this.props.onClick(this.props.to)}
        name={this.props.name}>
        <Icon name={this.props.name}/>
        {this.props.label}
      </Menu.Item>
    );
  }
}

AppSidebarButton.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export const AppSidebarButtonContainer = connect(
  undefined,
  mapDispatchToSidebarProps,
)(AppSidebarButton);

export default AppSidebarButtonContainer;