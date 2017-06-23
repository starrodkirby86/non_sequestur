import React from 'react';
import PropTypes from 'prop-types';
import AvatarGrid from './AvatarGrid';
import { mapStateToUserProps, mapDispatchToAvatarFormProps, } from '../UserConnectLogic';
import { connect } from 'react-redux';
import { Header, Divider } from 'semantic-ui-react';

class AvatarForm extends React.Component {

  render() {
    return (
      <div>
        <Header>
          <Header.Content>
            Change Avatar
          </Header.Content>
          <Header.Subheader>
            Here you can change your avatar. Move with the -/+ buttons or select a page you'd like to visit.
          </Header.Subheader>
        </Header>
        <Divider />
        <AvatarGrid avatar={this.props.avatar} onSubmit={this.props.onFormSubmit} />
      </div>
    );
  }
}

AvatarForm.propTypes = {
  avatar: PropTypes.number.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
};

export const AvatarFormContainer = connect(mapStateToUserProps, mapDispatchToAvatarFormProps)(AvatarForm);

export default AvatarFormContainer;