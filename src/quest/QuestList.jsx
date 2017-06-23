import React from 'react';
import PropTypes from 'prop-types';
import Quest from './Quest';
import { Card } from 'semantic-ui-react';

const QuestList = ({quests}) => {
  const questComponents = quests.map((quest) => <Quest.Card {...quest}
                                                            key={quest.id}/>);
  return (
    <Card.Group>
      {questComponents}
    </Card.Group>
  );
};

QuestList.propTypes = {
  quests: PropTypes.arrayOf(PropTypes.shape(Quest.propTypes)).isRequired,
};

export default QuestList;