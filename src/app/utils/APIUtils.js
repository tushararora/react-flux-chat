/* API Utils for mocking API */

import MessageActionCreators from '../actions/MessageActionCreators';
import ThreadActionCreators from '../actions/ThreadActionCreators';
import WebSocketUtils from './WebSocketUtils';
import DBUtils from './DBUtils';

/* APIUtils POJO Singleton */

const APIUtils = {

  /**
   * Fetch all messages on thread click
   * @param {number} threadId
   */

  fetchAllMessages(threadId) {
    if (DBUtils.isOpen()) {
      DBUtils.getAllMessages(threadId).then((messages) => {
        MessageActionCreators.receiveAllMessages(messages);
      });
    }
  },

  /**
   * Fetch all threads on App initialization
   */

  fetchAllThreads() {
    const threadList = [{
      name: 'Eddard',
      id: 1
    }, {
      name: 'Jon',
      id: 2
    }, {
      name: 'Arya',
      id: 3
    }, {
      name: 'Tyrion',
      id: 4
    }, {
      name: 'Sansa',
      id: 5
    }, {
      name: 'Brandon',
      id: 6
    }, {
      name: 'Sandor',
      id: 7
    }, {
      name: 'Jaime',
      id: 8
    }, {
      name: 'Catelyn',
      id: 9
    }, {
      name: 'Petyr',
      id: 10
    }, {
      name: 'Daario',
      id: 11
    }, {
      name: 'Ramsay',
      id: 12
    }, {
      name: 'Theon',
      id: 13
    }, {
      name: 'Brienne',
      id: 14
    }, {
      name: 'Samwell',
      id: 15
    }];
    setTimeout(() => {
      ThreadActionCreators.receiveAllThreads(threadList);
    }, 0);
  },

  /**
   * Create message on submit in message composer
   * @param {object} message
   */

  createMessage(message) {
    if (DBUtils.isOpen()) {
      DBUtils.addMessage(message).then(() => {
        WebSocketUtils.doSend(`Echo ${message.text}`);
      });
    }
  }
};

export default APIUtils;
