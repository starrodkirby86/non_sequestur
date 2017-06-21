import React from 'react';
import { QuestsContainer } from '../quest/QuestsContainer';
import QuestForm from '../quest/QuestForm';
import { Container, Header, Divider } from 'semantic-ui-react';

export const AppContent = () => (
  <div>
    <Container>
      <Header as="h1">Nico nico nii!</Header>
      <Divider />
      <p>Testing if this works. Please let this work.</p>
      <Divider />
      <QuestsContainer />
    </Container>
    <Container>
      <QuestForm />
    </Container>
  </div>
);

export default AppContent;