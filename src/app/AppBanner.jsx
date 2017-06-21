import React from 'react';
import PropTypes from 'prop-types';
import { Header, Image, Menu } from 'semantic-ui-react';

// TODO: Menu should be replaced with some custom CSS content appropriate for a heading.
export const AppBanner = (props) => (
  <Menu stackable>
    <Menu.Item>
      <Image shape="circular"
             size="small"
             src="/res/default_icon.png"
             onClick={props.onClick} />
    </Menu.Item>
    <Menu.Item>
      <Header as="h1">
        non sequestur
      </Header>
    </Menu.Item>
  </Menu>
);

AppBanner.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AppBanner;