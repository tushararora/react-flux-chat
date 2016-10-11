import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ThreadPanel from './components/ThreadPanel';
import ChatPanel from './components/ChatPanel';
import APIUtils from './utils/APIUtils';
import WebSocketUtils from './utils/WebSocketUtils';
import DBUtils from './utils/DBUtils';

/* Require css resources to be bundled with html */

require('bootstrap/dist/css/bootstrap.min.css');
require('font-awesome/css/font-awesome.min.css');
require('../assets/css/style.css');

/* Hardcoded current user passed on to child components */

const currentUser = {
  name: 'FooBar'
};

/**
 * Class representing entry point
 * @extends Component
 */

class App extends Component {

  render() {
    return (
      <div className="container">
        <div className="row">
          <ThreadPanel />
          <ChatPanel currentUser={currentUser} />
        </div>
      </div>
    );
  }
}

/* Initialize utils */

APIUtils.fetchAllThreads();
WebSocketUtils.init();
DBUtils.init();

/* Render App component to root */

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
