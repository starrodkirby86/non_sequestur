import React from 'react';
import './vendor/dist/semantic.min.css';
import QuestList from './quest/QuestList';
import QuestForm from './quest/QuestForm';
import { initialState } from './app/initialState';
import reducer from './reducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Container, Header, Divider } from 'semantic-ui-react';

export const store = createStore(reducer, initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Container>
            <Header as="h1">Nico nico nii!</Header>
            <Divider />
            <p>Testing if this works. Please let this work.</p>
            <Divider />
            <QuestList quests={store.getState().quests} />
          </Container>
          <Container>
          <QuestForm />
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
