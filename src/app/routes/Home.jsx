import React from 'react';
import QuestForm from '../../quest/QuestForm';
import AssignerTable from '../../assigner/assignerViews/AssignerTable';
import Assigner from '../../assigner/Assigner';
import { QuestsContainer } from '../../quest/QuestsContainer';
import { defaultAssigners } from '../../assigner/AssignerUtil';
import { Container, Header, Divider } from 'semantic-ui-react';

export const Home = () => (
  <div>
    <Container>
      <Header as="h1">Nico nico nii!</Header>
      <Divider />
      <p>Testing if this works. Please let this work.</p>
      <Divider />
      <QuestsContainer />
    </Container>
    <Divider/>
    <Container>
      <QuestForm />
    </Container>
    <Divider/>
    <Assigner.Details {...defaultAssigners[Math.floor(Math.random() * defaultAssigners.length)]} />
    <Assigner.Compact {...defaultAssigners[Math.floor(Math.random() * defaultAssigners.length)]} />
    <AssignerTable />
  </div>
);

export default Home;