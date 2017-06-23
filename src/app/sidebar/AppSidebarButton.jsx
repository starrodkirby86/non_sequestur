import React from 'react';
import PropTypes from 'prop-types';
import { Menu, Icon } from 'semantic-ui-react';
import { mapDispatchToSidebarProps } from '../AppConnectLogic';
import { connect } from 'react-redux';


export class AppSidebarButton extends React.Component {

  handleClick() {
    this.props.onClick(this.props.to);
  }

  render() {
    return (
      <Menu.Item
        onClick={() => this.props.onClick(this.props.to)}
        name={this.props.name}>
        <Icon name={this.props.name}/>
        {this.props.label} is {this.props.to}
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