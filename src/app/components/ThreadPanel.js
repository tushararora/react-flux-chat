import React, { Component } from 'react';
import ThreadList from './ThreadPanelComponents/ThreadList';
import SearchContainer from './ThreadPanelComponents/SearchContainer';
import ThreadPanelHeader from './ThreadPanelComponents/ThreadPanelHeader';
import ThreadStore from '../stores/ThreadStore';

/**
 * Class representing ThreadPanel Component (Parent - App)
 * @extends Component
 */


class ThreadPanel extends Component {

  constructor() {
    super();
    this.state = {
      filterThread: '',
      threadList: ThreadStore.getAllThreads(),
      currentThreadId: ThreadStore.getCurrentThreadId()
    };
    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  /* Add listeners on component mount to respective stores */

  componentDidMount() {
    ThreadStore.addListener(this.onChange);
  }

  /* Handle change in ThreadStore */

  onChange() {
    this.setState({
      threadList: ThreadStore.getAllThreads(),
      currentThreadId: ThreadStore.getCurrentThreadId()
    });
  }

  /* Handle search input and set current state */

  handleSearchInput(searchTerm) {
    this.setState({ filterThread: searchTerm });
  }

  /* Remove listeners on component unmount from respective stores */

  componentWillUnMount() {
    ThreadStore.removeListener(this.onChange);
  }

  render() {
    return (
      <div className="col-xs-12 col-sm-4 col-md-3 col-lg-3 left-box">
        <div className="col-inside decor-default chat">
          <ThreadPanelHeader />
          <SearchContainer
            filterThread={this.state.filterThread}
            onSearchInput={this.handleSearchInput}
          />
          <ThreadList
            threadList={this.state.threadList}
            filterThread={this.state.filterThread}
            currentThreadId={this.state.currentThreadId}
          />
        </div>
      </div>
    );
  }
}

export default ThreadPanel;
