import React from 'react';
import './vendor/dist/semantic.min.css';
import QuestList from './quest/QuestList';
import { Container, Header, Divider } from 'semantic-ui-react';

const quests = [{
  id: '60',
  title: 'foo',
},
  {
    id: '91',
    title: 'baz',
  },
];

class App extends React.Component {
  render() {
    return (
      <Container>
        <Header as="h1">Nico nico nii!</Header>
        <Divider />
        <p>Testing if this works. Please let this work.</p>
        <Divider />
        <QuestList quests={quests}/>
      </Container>
    );
  }
}

export default App;
