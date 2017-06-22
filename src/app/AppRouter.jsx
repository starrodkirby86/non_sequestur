import React from 'react';
import { QuestsContainer } from '../quest/QuestsContainer';
import QuestForm from '../quest/QuestForm';
import createHistory from 'history/createBrowserHistory'
import { Container, Header, Divider } from 'semantic-ui-react';
import Assigner from '../assigner/Assigner';
import { defaultAssigners } from '../assigner/AssignerUtil';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import AssignerTable from '../assigner/assignerViews/AssignerTable';

export const AppRouter = () => (
  <ConnectedRouter history={createHistory()}>
    <Container>
      <Route path="/" component={Foo} />
    </Container>
  </ConnectedRouter>
);

const Foo = () => (
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

export default AppRouter;