import React, { Component, PropTypes } from 'react';
import ChatPanelHeader from './ChatPanelComponents/ChatPanelHeader';
import ChatPanelBody from './ChatPanelComponents/ChatPanelBody';
import ChatPanelFooter from './ChatPanelComponents/ChatPanelFooter';
import MessageStore from '../stores/MessageStore';
import ThreadStore from '../stores/ThreadStore';
import MessageActionCreators from '../actions/MessageActionCreators';

const ENTER_KEY_CODE = 13;

/**
 * Class representing ChatPanel Component (Parent - App)
 * @extends Component
 */

class ChatPanel extends Component {

  constructor() {
    super();
    this.state = {
      messages: MessageStore.getAllMessages(),
      text: '',
      thread: ThreadStore.getCurrentThread()
    };
    this.onMessageChange = this.onMessageChange.bind(this);
    this.onTextChange = this.onTextChange.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onThreadChange = this.onThreadChange.bind(this);
  }

  /* Add listeners on component mount to respective stores */

  componentDidMount() {
    MessageStore.addListener(this.onMessageChange);
    ThreadStore.addListener(this.onThreadChange);
  }

  /* Handle change in MessageStore */

  onMessageChange() {
    this.setState({ messages: MessageStore.getAllMessages() });
  }

  /* Handle change in ThreadStore */

  onThreadChange() {
    this.setState({ thread: ThreadStore.getCurrentThread() });
  }

  /* Handle change in thread search input */

  onTextChange(event) {
    this.setState({ text: event.target.value });
  }

  /* Handle submit event in message composer */

  onKeyDown(event) {
    if (event.keyCode === ENTER_KEY_CODE) {
      event.preventDefault();
      const text = this.state.text.trim();
      if (text !== '') {
        MessageActionCreators.createMessage(text, this.state.thread.id,
          this.props.currentUser.name);
        this.setState({ text: '' });
      }
    }
  }

  /* Remove listeners on component unmount from respective stores */

  componentWillUnMount() {
    MessageStore.removeListener(this.onMessageChange);
    ThreadStore.removeListener(this.onThreadChange);
  }

  /* Render ChatPanelHeader and ChatPanelFooter only when a thread is clicked. Before that
   * there will be nothing but blank chat panel.
   */

  render() {
    let chatPanelHeader;
    let chatPanelFooter;
    if (this.state.thread && this.state.thread.id !== -1) {
      chatPanelHeader = <ChatPanelHeader thread={this.state.thread} />;
      chatPanelFooter = (<ChatPanelFooter
        text={this.state.text}
        onTextChange={this.onTextChange}
        onKeyDown={this.onKeyDown}
      />);
    }

    return (
      <div className="col-xs-12 col-sm-8 col-md-9 col-lg-9 right-box">
        <div className="col-inside decor-default chat">
          {chatPanelHeader}
          <ChatPanelBody messages={this.state.messages} currentUser={this.props.currentUser} />
          {chatPanelFooter}
        </div>
      </div>
    );
  }
}

ChatPanel.propTypes = {
  currentUser: PropTypes.object.isRequired
};

export default ChatPanel;
