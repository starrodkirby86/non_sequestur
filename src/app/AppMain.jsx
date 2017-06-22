import React from 'react';
import AppSidebar from './sidebar/AppSidebar';
import AppContent from './AppContent';
import { Sidebar, Segment } from 'semantic-ui-react';

class AppMain extends React.Component {
  render() {
    return (
      <div>
        <Sidebar.Pushable as={Segment}>
          <AppSidebar visible={this.props.visible} />
          <Sidebar.Pusher>
            <Segment basic>
              <AppContent />
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}

export default AppMain;