import React from 'react';
import PropTypes from 'prop-types';
import AvatarWidget from './AvatarWidget';
import { Button, Container, Divider, Grid, Input } from 'semantic-ui-react';

class AvatarGrid extends React.Component {
  state = {
    selectedAvatar: this.props.avatar,
    page: Math.max(2, Math.min(298, this.props.avatar)),
  };

  handlePageDown = () => {
    if (this.state.page - 2 > 0)
      this.setState({page: this.state.page - 1});
  };

  handlePageUp = () => {
    if (this.state.page + 2 < 300)
      this.setState({page: this.state.page + 1});
  };

  handleChangePage = (e) => {
    // Numeric value.
    const value = parseInt(e.target.value, 10);
    this.setState({page: value});
  };

  handleSelectAvatar = (id) => {
    // Gets passed to AvatarWidget.
    this.setState({selectedAvatar: id});
  };

  generateAvatars = (min, max) => {
    const avatars = [];
    for (let i = min; i <= max; i++) {
      avatars.push(
        <Grid.Column key={i}>
          <AvatarWidget isActive={i !== this.state.selectedAvatar} avatar={i} onClick={this.handleSelectAvatar}/>
        </Grid.Column>
      );
    }
    return avatars;
  };

  render() {
    const avatars = this.generateAvatars(this.state.page - 2, this.state.page + 2);
    return (
      <div>
        <Grid columns={7}>
          <Grid.Column>
            <Button labelPosition='left' icon='left chevron' content='Back' onClick={this.handlePageDown}/>
          </Grid.Column>
          {avatars}
          <Grid.Column>
            <Button labelPosition='right' icon='right chevron' content='Forward' onClick={this.handlePageUp}/>
          </Grid.Column>
        </Grid>
        <Divider/>
        <Container>
          <Input label="Page"
                 type="number"
                 value={this.state.page}
                 min={0}
                 max={299}
                 onChange={this.handleChangePage}/>
          <Button onClick={() => this.props.onSubmit(this.state.selectedAvatar)}>Submit</Button>
        </Container>
      </div>
    );
  }
}

AvatarGrid.propTypes = {
  avatar: PropTypes.number.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default AvatarGrid;