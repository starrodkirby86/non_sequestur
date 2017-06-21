import QuestList from './QuestList';
import { connect } from 'react-redux';

const mapStateToQuestsProps = (state) => {
  const quests = state.quests.map(q => (
    {
      ...q
    }
  ));
  return {
    quests,
  };
};

export const QuestsContainer = connect(
  mapStateToQuestsProps,
)(QuestList);