import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import ReactTimeAgo from 'react-timeago';
import AppConstants from '../../constants/AppConstants';

const minPeriod = AppConstants.TIME_AGO.MIN_PERIOD;

/**
 * Class representing Chat Message Component (Parent - ChatPanelBody)
 * @extends Component
 */


class ChatMessage extends Component {

  constructor() {
    super();
  }

  render() {
    const message = this.props.message;
    const currentUser = this.props.currentUser;
    return (
      <div className="row">
        <div
          className={classNames({
            'col-md-8': true,
            'default-message': true,
            'left-message': message.author !== currentUser.name,
            'pull-left': message.author !== currentUser.name,
            'right-message': message.author === currentUser.name,
            'pull-right': message.author === currentUser.name
          })}
        >
          <div className="text">{message.text}
          </div>
          <div className="time">
            <ReactTimeAgo date={message.createdAt} minPeriod={minPeriod} />
          </div>
        </div>
      </div>
    );
  }

}

ChatMessage.propTypes = {
  message: PropTypes.object.isRequired,
  currentUser: PropTypes.object.isRequired
};

export default ChatMessage;
