import * as types from './QuestActionTypes';

export function addQuest(title, description, type, difficulty, timestamp) {
  return {
    type: types.QUEST_ADD,
    title: title,
    description: description,
    questType: type,
    difficulty: difficulty,
    timestamp: timestamp,
  };
}

export function removeQuest(id) {
  return {
    type: types.QUEST_REMOVE,
    id: id,
  }
}

export function toggleQuestComplete(id) {
  return {
    type: types.QUEST_TOGGLE_COMPLETE,
    id: id,
  }
}