import React from 'react';
import AvatarForm from './AvatarForm';
import { Button, Modal } from 'semantic-ui-react';
import { store } from '../../App';

class AvatarModal extends React.Component {

  state = {modalOpen: false};

  handleOpen = (e) => this.setState({
    modalOpen: true,
  });

  handleClose = (e) => this.setState({
    modalOpen: false,
  });

  componentWillMount() {
    store.subscribe(this.handleClose);
  }

  triggerContent = (
    <Button onClick={this.handleOpen}>Change Avatar</Button>
  );

  render() {
    return (
      <Modal trigger={this.triggerContent}
             open={this.state.modalOpen}
             onClose={this.handleClose}>
        <Modal.Content>
          <AvatarForm />
        </Modal.Content>
      </Modal>);
  }
}

export default AvatarModal;