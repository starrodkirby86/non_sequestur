import * as types from './AssignerActionTypes';

export const addToAffection = (name, amount) => ({
  types: types.ASSIGNER_ADD_TO_AFFECTION,
  name,
  amount,
});

export const addNewQuest = (name, id) => ({
  types: types.ASSIGNER_ADD_NEW_QUEST,
  name,
  id,
});