import appReducer from './app/AppReducers';
import questReducer from './quest/QuestReducers';
import { combineReducers } from 'redux';

// TODO: Assigners need their own reducers too

const reducer = combineReducers({
  app: appReducer,
  quests: questReducer,
});

export default reducer;