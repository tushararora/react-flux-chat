import React, { Component, PropTypes } from 'react';

/**
 * Class representing ChatPanelFooter Component (Parent - ChatPanel)
 * @extends Component
 */

class ChatPanelFooter extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div className="default-panel chat-panel-footer">
        <form>
          <div className="input-group input-group-unstyled">
            <span className="input-group-addon">
              <span className="glyphicon glyphicon-paperclip pull-left" />
            </span>
            <input type="text" placeholder="Type a message" onChange={this.props.onTextChange} onKeyDown={this.props.onKeyDown} value={this.props.text} />
            <span className="input-group-addon">
              <span className="glyphicon glyphicon-headphones pull-right" />
            </span>
          </div>
        </form>
      </div>
    );
  }
}

ChatPanelFooter.propTypes = {
  text: PropTypes.string,
  onKeyDown: PropTypes.func.isRequired,
  onTextChange: PropTypes.func.isRequired
};

export default ChatPanelFooter;
