import React from 'react';
import './vendor/dist/semantic.min.css';
import { AppContainer } from './app/AppStructure';
import { initialState } from './app/initialState';
import reducer from './reducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

export const store = createStore(reducer, initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

export default App;
