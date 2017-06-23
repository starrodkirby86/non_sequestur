import React from 'react';
import Home from './routes/Home';
import Quests from './routes/Quests';
import Assigners from './routes/Assigners';
import Profile from './routes/Profile';
import Settings from './routes/Settings';
import { Route, Switch } from 'react-router-dom';

export const AppRouter = () => (
    <Switch>
      <Route exact path="/quests" component={Quests} />
      <Route exact path="/assigners" component={Assigners} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/settings" component={Settings} />
      <Route exact path="/" component={Home} />
    </Switch>
);

export default AppRouter;