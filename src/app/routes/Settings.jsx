import React from 'react';
import { Container, Header, Divider, Message, Feed, Image, Grid, Statistic, Item, Progress } from 'semantic-ui-react';

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
    <Image src="http://via.placeholder.com/640x720?text=%22This+is+just+placeholder+text.%22" />
  </Container>
);

export default Settings;