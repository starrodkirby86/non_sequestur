import appReducer from './app/AppReducers';
import assignerReducer from './assigner/AssignerReducers';
import questReducer from './quest/QuestReducers';
import userReducer from './user/UserReducers';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

const reducers = combineReducers({
  app: appReducer,
  assigners: assignerReducer,
  quests: questReducer,
  user: userReducer,
  router: routerReducer,
});

export default reducers;