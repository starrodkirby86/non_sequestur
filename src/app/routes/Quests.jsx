import React from 'react';
import QuestForm from '../../quest/QuestForm';
import { QuestsContainer } from '../../quest/QuestsContainer';
import { Container, Divider } from 'semantic-ui-react';

export const Quests = () => (
  <div>
    <Container>
      <QuestsContainer />
    </Container>
    <Divider/>
    <Container>
      <QuestForm />
    </Container>
  </div>
);

export default Quests;