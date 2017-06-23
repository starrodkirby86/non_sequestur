import React from 'react';
import { Container, Header, Divider, Feed, Image, Grid, Statistic, Item, Progress } from 'semantic-ui-react';

export const Profile = () => (
  <Container>
    <Container textAlign="left">
      <Header as="h1">Profile</Header>
      Your profile contains the most pertinent information about you, and what sort of quests you have completed.
    </Container>
    <Divider/>
    <Container>

      <Image floated="left"
             src="/res/avatars/avatar63.png"/>
      <Header as="h1">
        <Header.Content>
          John Doe
        </Header.Content>
        <Header.Subheader>Novice Quest Solver</Header.Subheader>
      </Header>

      <Container text>
        <Statistic.Group>
          <Statistic>
            <Statistic.Value>
              35
            </Statistic.Value>
            <Statistic.Label>
              Quests Completed
            </Statistic.Label>
          </Statistic>

          <Statistic>
            <Statistic.Value>
              123
            </Statistic.Value>
            <Statistic.Label>
              Total Affection Points
            </Statistic.Label>
          </Statistic>

          <Statistic>
            <Statistic.Value>
              0
            </Statistic.Value>
            <Statistic.Label>
              Assigners Maxed Out
            </Statistic.Label>
          </Statistic>
        </Statistic.Group>
      </Container>

      <Grid columns={2}>
        <Grid.Column>
          <Header>
            <Header.Content>
              Recent Activity
            </Header.Content>
          </Header>
          <Divider />
          <Feed>
            <Feed.Event>
              <Feed.Label image="/res/idols/Nico.png"/>
              <Feed.Content>
                <Feed.Date>just now</Feed.Date>
                <Feed.Summary>
                  You completed the quest <a>Not My Job!</a> for <a>Nico</a>.
                </Feed.Summary>
              </Feed.Content>
            </Feed.Event>
            <Feed.Event>
              <Feed.Label image="/res/idols/Karin.png"/>
              <Feed.Content>
                <Feed.Date>2 days ago</Feed.Date>
                <Feed.Summary>
                  You completed the quest <a>Leaky Pipes?</a> for <a>Karin</a>.
                </Feed.Summary>
              </Feed.Content>
            </Feed.Event>
            <Feed.Event>
              <Feed.Label image="/res/idols/Rina.png"/>
              <Feed.Content>
                <Feed.Date>2 days ago</Feed.Date>
                <Feed.Summary>
                  You completed the quest <a>The Outside World is Scary!</a> for <a>Rina</a>.
                </Feed.Summary>
              </Feed.Content>
            </Feed.Event>
            <Feed.Event>
              <Feed.Label image="/res/idols/Yoshiko.png"/>
              <Feed.Content>
                <Feed.Date>3 days ago</Feed.Date>
                <Feed.Summary>
                  You completed the quest <a>I Need a Little Demon Dress!</a> for <a>Yoshiko</a>.
                </Feed.Summary>
              </Feed.Content>
            </Feed.Event>
            <Feed.Event>
              <Feed.Label image="/res/idols/Hanayo.png"/>
              <Feed.Content>
                <Feed.Date>3 days ago</Feed.Date>
                <Feed.Summary>
                  You completed the quest <a>DAREKA TASUKETE!</a> for <a>Hanayo</a>.
                </Feed.Summary>
              </Feed.Content>
            </Feed.Event>
          </Feed>
        </Grid.Column>
        <Grid.Column>
          <Header>
            <Header.Content>
              Best Girls
            </Header.Content>
          </Header>
          <Divider />
          <Item.Group link>
            <Item>
              <Item.Image size="tiny" src="/res/idols/Nico.png"/>
              <Item.Content>
                <Item.Header>Nico</Item.Header>
                <Item.Content><Progress percent={48}/></Item.Content>
              </Item.Content>
            </Item>
            <Item>
              <Item.Image size="tiny" src="/res/idols/Riko.png"/>
              <Item.Content>
                <Item.Header>Riko</Item.Header>
                <Item.Content><Progress percent={37}/></Item.Content>
              </Item.Content>
            </Item>
            <Item>
              <Item.Image size="tiny" src="/res/idols/Yoshiko.png"/>
              <Item.Content>
                <Item.Header>Yoshiko</Item.Header>
                <Item.Content><Progress percent={25}/></Item.Content>
              </Item.Content>
            </Item>
          </Item.Group>
        </Grid.Column>
      </Grid>

    </Container>
  </Container>
);

export default Profile;