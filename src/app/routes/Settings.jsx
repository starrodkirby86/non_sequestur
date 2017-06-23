import React from 'react';
import AvatarModal from '../../user/settings/AvatarModal';

import { Container, Header, Divider, Message, Image, } from 'semantic-ui-react';

export const Settings = () => (
  <Container>
    <Message negative
             icon="warning"
             header="Hey, listen!"
             content="Most of this page is not functional. This message box is a Semantic-UI mockup. Thanks for listening!"/>
    <Container textAlign="left">
      <Header as="h1">Settings</Header>
      Change preferences and manage your account here.
    </Container>
    <Divider/>
    <AvatarModal/>
    <Divider/>
    <Image src="http://via.placeholder.com/640x720?text=%22This+is+just+placeholder+text.%22" />
  </Container>
);

export default Settings;