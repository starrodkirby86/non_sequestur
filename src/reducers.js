import appReducer from './app/AppReducers';
import assignerReducer from './assigner/AssignerReducers';
import questReducer from './quest/QuestReducers';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

const reducers = combineReducers({
  app: appReducer,
  assigners: assignerReducer,
  quests: questReducer,
  router: routerReducer,
});

export default reducers;