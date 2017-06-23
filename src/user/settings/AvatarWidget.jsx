import React from 'react';
import PropTypes from 'prop-types';
import { getAvatarImage } from '../../res/ImageUtil';
import { Dimmer, Image } from 'semantic-ui-react';

class AvatarWidget extends React.Component {
  handleClick = () => {
    this.props.onClick(this.props.avatar);
  };

  render() {
    const isActive = this.props.isActive;
    const content = (
      <div/>
    );
    return (
      <div>
      <Dimmer.Dimmable
        as={Image}
        dimmed={isActive}
        dimmer={({active: isActive, content})}
        onClick={this.handleClick}
        src={getAvatarImage(this.props.avatar)} />
      </div>
    );
  }
}

AvatarWidget.propTypes = {
  isActive: PropTypes.bool.isRequired,
  avatar: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default AvatarWidget;