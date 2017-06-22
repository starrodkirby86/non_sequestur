import React from 'react';
import './vendor/dist/semantic.min.css';
import { AppContainer } from './app/AppStructure';
import { initialState } from './app/initialState';
import reducers from './reducers';
import middleware from './middleware';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

export const store = createStore(reducers, initialState, middleware);

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
