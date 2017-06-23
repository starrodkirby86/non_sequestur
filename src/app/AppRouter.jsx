import React from 'react';
import createHistory from 'history/createBrowserHistory';
import Home from './routes/Home';
import Quests from './routes/Quests';
import Assigners from './routes/Quests';
import Profile from './routes/Quests';
import Settings from './routes/Quests';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

/* TODO: This is imperfect. There should be a better way navigating with router :thinking:
    Consider instead to just opt for using the Link paths instead of dispatching the push actions.
 */

export const AppRouter = () => (
  <ConnectedRouter history={createHistory()}>
    <Switch>
      <Route exact path="/quests" component={Quests} />
      <Route exact path="/assigners" component={Assigners} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/settings" component={Settings} />
      <Route path="/" component={Home} />
    </Switch>
  </ConnectedRouter>
);

export default AppRouter;