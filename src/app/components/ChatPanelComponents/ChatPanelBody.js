import React, { Component, PropTypes } from 'react';
import ChatMessage from './ChatMessage';

/**
 * Class representing ChatPanelBody Component (Parent - ChatPanel)
 * @extends Component
 */


class ChatPanelBody extends Component {

  constructor() {
    super();
  }

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }


  /**
   * Scroll to bottom on componentDidMount and componentDidUpdate
   */

  scrollToBottom() {
    this.chatBodyScroll.scrollTop = this.chatBodyScroll.scrollHeight;
  }

  render() {
    const currentUser = this.props.currentUser;
    return (
      <div className="chat-body">
        <div className="chat-body-scroll" ref={(node) => { this.chatBodyScroll = node; }} >
          {
            this.props.messages.map((message, index) =>
              <ChatMessage message={message} key={index} currentUser={currentUser} />
            )
          }
        </div>
      </div>
    );
  }
}

ChatPanelBody.propTypes = {
  messages: PropTypes.array.isRequired,
  currentUser: PropTypes.object.isRequired
};

export default ChatPanelBody;
