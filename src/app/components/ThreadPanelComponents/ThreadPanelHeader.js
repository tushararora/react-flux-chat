import React, { Component } from 'react';
import batImage from '../../../assets/images/bat.png';

/**
 * Class representing ThreadList Component (Parent - ThreadPanel)
 * @extends Component
 */

class ThreadPanelHeader extends Component {
  render() {
    return (
      <div className="default-panel row thread-panel-header">
        <div className="col-xs-4 col-sm-4 col-md-4 panel-avatar">
          <div className="avatar">
            <img src={batImage} alt="User name" />
          </div>
        </div>
        <div className="col-xs-8 col-sm-8 col-md-8 thread-panel-icon">
          <span className="glyphicon glyphicon-headphones pull-right" />
        </div>
      </div>
    );
  }
}

export default ThreadPanelHeader;
