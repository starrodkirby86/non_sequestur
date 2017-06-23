import PropTypes from 'prop-types';
import QuestCard from './questViews/QuestCard';

const Quest = (props) => {};

Quest.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: PropTypes.string,
  type: PropTypes.string,
  difficulty: PropTypes.number,
  isComplete: PropTypes.bool,
  timestamp: PropTypes.instanceOf(Date),
  assigner: PropTypes.string,
};

Quest.Card = QuestCard;

export default Quest;