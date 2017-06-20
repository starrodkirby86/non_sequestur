import questReducer from './quest/QuestReducers';
import { combineReducers } from 'redux';

const reducer = combineReducers({
  quests: questReducer,
});

export default reducer;