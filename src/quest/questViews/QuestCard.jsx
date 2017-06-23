import React from 'react';
import { Card, Segment, Image, Reveal, Button } from 'semantic-ui-react';
import { toggleQuestComplete } from '../QuestActionCreators';
import { store } from '../../App';

export const QuestCard = ({id, title, description = "Boring.", type = "Misc.", image = "", difficulty = 0, isComplete = false, timestamp = new Date(), assigner = "None",}) => (
  <Card id={id}
        className="quest"
        color={isComplete ? "green" : "red"}>
    <Image width={480}
           height={180}
           src={image}/>
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
      <Reveal animated="move up">
        <Reveal.Content visible>
          <Segment compact>
            Created on {timestamp.toDateString()} by {assigner}
          </Segment>
        </Reveal.Content>
        <Reveal.Content hidden>
          <Button content="Mark Completed!" icon="send" labelPosition="left" color="green"
                  onClick={() => store.dispatch(toggleQuestComplete(id))}/>
        </Reveal.Content>
      </Reveal>
    </Card.Content>
  </Card>
);

export default QuestCard;