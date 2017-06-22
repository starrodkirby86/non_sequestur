import React from 'react';
import { Container, Grid, Image, Header, Progress } from 'semantic-ui-react';

export const AssignerDetails = ({name, avatarPath, idolGroup, schoolYear, affection, quests}) => (
  <Grid columns={2}>
    <Grid.Column mobile={2} tablet={1}>
      <Image src={avatarPath}
             width={128}
             height={128} />
    </Grid.Column>
    <Grid.Column mobile={2} tablet={1}>
      <Container text>
        <Header as="h1">
          {name}
        </Header>
        <Header.Subheader>
          {schoolYear} Student from {idolGroup}
        </Header.Subheader>
        <Progress percent={affection} label="Affection" />
      </Container>
    </Grid.Column>
  </Grid>
);

export default AssignerDetails;