import React from 'react';
import { Card, Image, Progress } from 'semantic-ui-react';

export const AssignerCompact = ({name, avatarPath, idolGroup, schoolYear, affection}) => (
  <Card>
    <Card.Content>
      <Image shape="circular"
             floated="left"
             size="tiny"
             src={avatarPath} />
      <Card.Header>{name}</Card.Header>
      <Card.Meta>{schoolYear} Student from {idolGroup}</Card.Meta>
      <Card.Description>
        <Progress percent={affection} label="Affection" />
      </Card.Description>
    </Card.Content>
  </Card>
);

export default AssignerCompact;