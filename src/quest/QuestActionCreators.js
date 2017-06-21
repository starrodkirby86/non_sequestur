import * as types from './QuestActionTypes';

export const addQuest = (title, description, type, difficulty, timestamp) => ({
  type: types.QUEST_ADD,
  title: title,
  description: description,
  questType: type,
  difficulty: difficulty,
  timestamp: timestamp,
});

export const removeQuest = id => ({
  type: types.QUEST_REMOVE,
  id: id,
});

export const toggleQuestComplete = id => ({
    type: types.QUEST_TOGGLE_COMPLETE,
    id: id,
  });