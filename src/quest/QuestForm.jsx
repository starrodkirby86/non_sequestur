import React from 'react';
import PropTypes from 'prop-types';
import { addQuest } from './QuestActionCreators';
import { Button, Form } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { store } from '../App';

class QuestForm extends React.Component {
  state = {
      title: '',
      description: '',
      type: '',
      difficulty: 0,
  };

  handleChange = (e) => {
    const change = {[`${e.target.name}`]: e.target.value};
    this.setState(change);
  };

  // TODO: Use connect to properly map these with the store, and not simply dispatch
  handleClick = (e) => {
    store.dispatch(addQuest(this.state.title, this.state.description, this.state.type, this.state.difficulty, new Date()));
  };

  render() {
    return (
      <Form>
          <Form.Input name="title"
                      label="Title"
                      value={this.state.title}
                      placeholder="Quest Title"
                      onChange={this.handleChange}/>
          <Form.TextArea name="description"
                         label="Description"
                         value={this.state.description}
                         placeholder="Write about your quest here..."
                         onChange={this.handleChange}/>
        <Form.Group widths="equal">
          <Form.Input name="type"
                      label="Quest Type"
                      value={this.state.type}
                      placeholder="What kind of quest is it?"
                      onChange={this.handleChange}/>
          <Form.Input name="difficulty"
                      label="Difficulty"
                      value={this.state.difficulty}
                      type="number"
                      min={0}
                      max={10}
                      onChange={this.handleChange}/>
        </Form.Group>
          <Form.Field
            control={Button}
            type="button"
            onClick={this.handleClick}>
            Submit
          </Form.Field>
      </Form>
    );
  }
}

QuestForm.propTypes = {
  fields: PropTypes.object,
};

export default connect()(QuestForm);