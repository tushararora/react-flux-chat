import React, { Component, PropTypes } from 'react';
import Thread from './Thread';

/**
 * Class representing ThreadList Component (Parent - ThreadPanel)
 * @extends Component
 */

class ThreadList extends Component {

  constructor() {
    super();
  }

  /* Filter threads based on search input passed in through props */

  render() {
    const filteredThreads = this.props.threadList
      .filter(user => user.name.toLowerCase()
      .indexOf(this.props.filterThread.toLowerCase()) !== -1);

    return (
      <div className="thread-list">
        {
          filteredThreads.map((thread, index) =>
            <Thread
              key={index}
              id={thread.id}
              name={thread.name}
              currentThreadId={this.props.currentThreadId}
            />
        )}
      </div>
    );
  }
}

ThreadList.propTypes = {
  threadList: PropTypes.arrayOf(PropTypes.object).isRequired,
  filterThread: PropTypes.string,
  currentThreadId: PropTypes.number.isRequired
};

export default ThreadList;
