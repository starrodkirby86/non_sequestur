import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image } from 'semantic-ui-react';

const Quest = ({id, title, description = "Boring.", type = "Misc.", image = "", difficulty = 0, isComplete = false, timestamp = new Date(), assigner = "None",}) => {
  return (
    <Card id={id}
          className="quest">
      <Image width={480}
             height={180}
             src={image} />
      <Card.Content>
        <Card.Header>
          <Image floated='right'
                 size='mini'
                 shape="circular"
                 src={`/res/idols/${assigner}.png`}/>
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
        Created on {timestamp.toDateString()} by {assigner}
      </Card.Content>
    </Card>
  );
};

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

export default Quest;