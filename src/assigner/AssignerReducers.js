import * as types from './AssignerActionTypes';

export const assignerReducer = (state = [], action) => {
  switch (action.type) {
    case types.ASSIGNER_ADD_TO_AFFECTION: {
      return executeAssignerSliceReducer(state, action, addToAffection);
    }
    case types.ASSIGNER_ADD_NEW_QUEST: {
      return executeAssignerSliceReducer(state, action, addNewQuest);
    }
    default: {
      return state;
    }
  }
};

const executeAssignerSliceReducer = (state, action, logic) => {
  const assignerIndex = state.findIndex(a => a.name === action.name);
  const oldAssigner = state[assignerIndex];
  const newAssigner = logic(oldAssigner, action);
  return [
    ...state.slice(0, assignerIndex),
    newAssigner,
    ...state(assignerIndex + 1, state.length)
  ];
};

const addToAffection = (oldAssigner, action) => {
  return {
    ...oldAssigner,
    affection: validateAffectionValue(oldAssigner.affection + action.affection),
  };
};

const addNewQuest = (oldAssigner, action) => {
  return {
    ...oldAssigner,
    quests: oldAssigner.quests.concat(action.id),
  }
}

const validateAffectionValue = (affection) => Math.max(0, Math.min(100, affection));

export default assignerReducer;