import React, { Component, PropTypes } from 'react';
import profileImage from '../../../assets/images/bat.png';

/**
 * Class representing ChatPanelHeader Component (Parent - ChatPanel)
 * @extends Component
 */

class ChatPanelHeader extends Component {
  render() {
    return (
      <div className="default-panel row">
        <div className="col-xs-3 col-sm-2 col-md-1 panel-avatar">
          <div className="avatar">
            <img src={profileImage} alt="User name" />
          </div>
        </div>
        <div className="col-xs-9 col-sm-10 col-md-11 chat-thread-name">
          {this.props.thread ? this.props.thread.name : ''}
        </div>
      </div>
    );
  }
}

ChatPanelHeader.propTypes = {
  thread: PropTypes.object
};

export default ChatPanelHeader;
