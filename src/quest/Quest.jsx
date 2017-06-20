import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';

const Quest = ({id, title, description = "Boring.", type = "Misc.", difficulty = 0, isComplete = false, timestamp = new Date()}) => (
  <Card className="quest">
    <Card.Content>
      <Card.Header>
        {title}
      </Card.Header>
      <Card.Meta className="questMeta">
        {type} Quest, Difficulty: {difficulty}
      </Card.Meta>
      <Card.Description>
        {description}
        <p>{isComplete ? 'Completed!' : (<strong>Not complete!</strong>)}</p>
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      Created on {timestamp.toDateString()}
    </Card.Content>
  </Card>
);

Quest.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  type: PropTypes.string,
  difficulty: PropTypes.number,
  isComplete: PropTypes.bool,
  timeStamp: PropTypes.instanceOf(Date),
};

export default Quest;