import PropTypes from 'prop-types';
import Quest from '../quest/Quest';
import AssignerDetails from './assignerViews/AssignerDetails';
import AssignerCompact from './assignerViews/AssignerCompact';

export const Assigner = (props) => {};

Assigner.propTypes = {
  name: PropTypes.string.isRequired,
  avatarPath: PropTypes.string,
  idolGroup: PropTypes.string,
  schoolYear: PropTypes.string,
  affection: PropTypes.number,
  quests: PropTypes.arrayOf(PropTypes.shape(Quest)),
};

Assigner.Details = AssignerDetails;
Assigner.Compact = AssignerCompact;

export default Assigner;