import * as types from './QuestActionTypes';
import QuestUtils from './QuestUtil';

export default function questReducer(state = [], action) {
  switch (action.type) {
    case types.QUEST_ADD: {
      return addQuest(state, action);
    }
    case types.QUEST_REMOVE: {
      return removeQuest(state, action);
    }
    case types.QUEST_TOGGLE_COMPLETE: {
      return toggleQuestComplete(state, action);
    }
    default: {
      return state;
    }
  }
}

function addQuest(state, action) {
  const newQuest = QuestUtils.newQuest({title: action.title,
    description: action.description,
    type: action.questType,
    difficulty: action.difficulty,
    timestamp: action.timestamp});
  return state.concat(newQuest);
}

function removeQuest(state, action) {
  return state.filter(q => q.id !== action.id);
}

function toggleQuestComplete(state, action) {
  const questIndex = state.findIndex(q => q.id === action.id);
  const beforeQuest = state[questIndex];
  const afterQuest = {
    ...beforeQuest,
    isComplete: true,
  };
  return [
    ...state.slice(0, questIndex),
    afterQuest,
    ...state.slice(questIndex + 1, state.length),
  ];
}