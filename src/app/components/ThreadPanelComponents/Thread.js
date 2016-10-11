import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import ThreadActionCreators from '../../actions/ThreadActionCreators';
import batImage from '../../../assets/images/bat.png';

/**
 * Class representing Thread Component (Parent - ThreadList)
 * @extends Component
 */

class Thread extends Component {

  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
  }

  /**
   * Handle click on thread and call ThreadActionCreator with id of thread
   * @param {object} event
   */

  onClick(event) {
    event.preventDefault();
    ThreadActionCreators.clickThread(this.props.id);
  }

  render() {
    return (
      <a
        href=""
        onClick={this.onClick}
        className={classNames({
          active: this.props.id === this.props.currentThreadId
        })}
      >
        <div className="row thread">
          <div className="col-md-3 col-xs-3">
            <div className="avatar">
              <img src={batImage} alt="User name" />
            </div>
          </div>
          <div className="col-md-9 col-xs-9 thread-name">
            <div className="pull-left">{this.props.name}</div>
          </div>
        </div>
      </a>
    );
  }
}

Thread.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  currentThreadId: PropTypes.number
};

export default Thread;
