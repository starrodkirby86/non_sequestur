import React from 'react';
import { Button, Container, Divider, Header, Segment, Grid, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export const Home = () => (
  <div>
    <Segment textAlign="center"
             inverted>
      <Container text>
        <Header inverted>
          <Header.Content>Solve quests. Like a Boss.</Header.Content>
          <Header.Subheader>Manage quests, see cute anime girls... What more can you ask for?</Header.Subheader>
        </Header>
        <Button as={ Link }
                to="/quests"
                size="huge"
                primary>
          Get started!
        </Button>
      </Container>
    </Segment>
    <Divider />
    <Grid verticalAlign="top"
          equal>
      <Grid.Row>
        <Grid.Column width={8}>
          <Container text>
            <Header>Check out this layouting!</Header>
            <p>Yeah. That's right. Placeholder text is <i>so</i> trendy right now. You better believe it. I mean, who
              even uses real text these days? The whole world is inundated with fake news. What's a little <i>lorem
                ipsum</i> gonna do; cause natural disasters?</p>
            <Header>We Provide Solutions</Header>
            <p>If solutions mean dope-ass layouts, then sign us up! Oh wait, this is about cute anime girls and quests
              or something, right? Yeah. Then that. That's the solution.</p>
          </Container>
        </Grid.Column>
        <Grid.Column width={4}>
          <Image src="http://placekitten.com/240/480"/>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
);

export default Home;