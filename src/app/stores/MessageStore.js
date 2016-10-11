import EventEmitter from 'events';
import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';
import MessageUtils from '../utils/MessageUtils';
import ThreadStore from '../stores/ThreadStore';
import DBUtils from '../utils/DBUtils';

const ACTION_TYPES = AppConstants.ACTION_TYPES;

const storeData = {
  messages: [],
  addMessages(receivedMessages) {
    this.messages = receivedMessages;
  },
  addMessage(text) {
    const currentThread = ThreadStore.getCurrentThread();
    const message = MessageUtils.getCreatedMessageData(text,
      currentThread.id, currentThread.author);
    DBUtils.addMessage(message);
    this.messages.push(message);
  }
};

const CHANGE_EVENT = 'change';
class MessageStore extends EventEmitter {

  constructor() {
    super();
    this.dispatchToken = AppDispatcher.register(this.dispatcherCallback.bind(this));
  }

  addListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  emitEvent() {
    this.emit(CHANGE_EVENT);
  }

  getAllMessages() {
    return storeData.messages;
  }

  dispatcherCallback(action) {
    switch (action.type) {

      case ACTION_TYPES.CREATE_MESSAGE: {
        const message = MessageUtils.getCreatedMessageData(
          action.text,
          action.currentThreadId,
          action.author
        );
        storeData.messages.push(message);
        this.emitEvent();
        break;
      }

      case ACTION_TYPES.RECEIVE_MESSAGE:
        storeData.addMessage(action.text);
        this.emitEvent();
        break;

      case ACTION_TYPES.RECEIVE_MESSAGES:
        storeData.addMessages(action.messages);
        AppDispatcher.waitFor([ThreadStore.dispatchToken]);
        this.emitEvent();
        break;

      default:
    }
  }
}

export default new MessageStore();

