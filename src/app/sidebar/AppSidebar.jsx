import React from 'react';
import AppSidebarButton from './AppSidebarButton';
import { Sidebar, Menu } from 'semantic-ui-react';

export const AppSidebar = (props) => (
  <Sidebar as={Menu} animation='slide along' width='thin' visible={props.visible} icon='labeled' vertical inverted>
    <AppSidebarButton name="home"
                      label="Home" />
    <AppSidebarButton name="road"
                      label="Quests" />
    <AppSidebarButton name="users"
                      label="Assigners" />
    <AppSidebarButton name="child"
                      label="Profile" />
    <AppSidebarButton name="settings"
                      label="Settings" />
  </Sidebar>
);

export default AppSidebar;