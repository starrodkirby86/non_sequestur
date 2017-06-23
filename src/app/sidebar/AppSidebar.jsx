import React from 'react';
import AppSidebarButtonContainer from './AppSidebarButton';
import { Sidebar, Menu } from 'semantic-ui-react';

export const AppSidebar = (props) => (
  <Sidebar as={Menu} animation='slide along' width='thin' visible={props.visible} icon='labeled' vertical inverted>
    <AppSidebarButtonContainer name="home"
                      to="/"
                      label="Home"/>
    <AppSidebarButtonContainer name="road"
                      to="/quests"
                      label="Quests"/>
    <AppSidebarButtonContainer name="users"
                      to="/assigners"
                      label="Assigners"/>
    <AppSidebarButtonContainer name="child"
                      to="/profile"
                      label="Profile"/>
    <AppSidebarButtonContainer name="settings"
                      to="/settings"
                      label="Settings"/>
  </Sidebar>
);

export default AppSidebar;