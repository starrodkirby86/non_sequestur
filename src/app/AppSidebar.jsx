import React from 'react';
import { Sidebar, Menu, Icon } from 'semantic-ui-react';

export const AppSidebar = (props) => (
  <Sidebar as={Menu} animation='slide along' width='thin' visible={props.visible} icon='labeled' vertical inverted>
    <Menu.Item name='home'>
      <Icon name='home'/>
      Home
    </Menu.Item>
    <Menu.Item name='gamepad'>
      <Icon name='gamepad'/>
      Games
    </Menu.Item>
    <Menu.Item name='camera'>
      <Icon name='camera'/>
      Channels
    </Menu.Item>
  </Sidebar>
);

export default AppSidebar;