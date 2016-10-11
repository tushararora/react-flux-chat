import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';
import APIUtils from '../utils/APIUtils';
import MessageUtils from '../utils/MessageUtils';

const ACTION_TYPES = AppConstants.ACTION_TYPES;

/* MessageActionCreators for message actions */

const MessageActionCreators = {

  /**
   * Create message and dispatch to MessageStore
   * @param {string} text
   * @param {number} currentThreadId
   * @param {string} author
   */

  createMessage(text, currentThreadId, author) {
    AppDispatcher.dispatch({
      type: ACTION_TYPES.CREATE_MESSAGE,
      text,
      currentThreadId,
      author
    });
    const message = MessageUtils.getCreatedMessageData(text, currentThreadId, author);
    APIUtils.createMessage(message);
  },

  /**
   * Receive messages and dispatch to MessageStore
   * @param {array} messages
   */

  receiveAllMessages(messages) {
    AppDispatcher.dispatch({
      type: ACTION_TYPES.RECEIVE_MESSAGES,
      messages
    });
  },

  /**
   * Receive message and dispatch to MessageStore
   * @param {string} text
   */

  receiveMessage(text) {
    AppDispatcher.dispatch({
      type: ACTION_TYPES.RECEIVE_MESSAGE,
      text
    });
  }
};

export default MessageActionCreators;
