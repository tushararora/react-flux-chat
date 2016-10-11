import EventEmitter from 'events';
import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';

const ACTION_TYPES = AppConstants.ACTION_TYPES;

const storeData = {
  currentThreadId: -1,
  threads: []
};

const CHANGE_EVENT = 'change';
class ThreadStore extends EventEmitter {

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

  getCurrentThreadId() {
    return storeData.currentThreadId;
  }

  getCurrentThread() {
    const threads = storeData.threads
      .filter(thread => storeData.currentThreadId === thread.id);
    return (threads.length > 0) ? threads[0] : null;
  }

  getAllThreads() {
    return storeData.threads;
  }

  dispatcherCallback(action) {
    switch (action.type) {

      case ACTION_TYPES.CLICK_THREAD:
        storeData.currentThreadId = action.threadId;
        this.emitEvent();
        break;

      case ACTION_TYPES.RECEIVE_ALL_THREADS:
        storeData.threads = action.threads;
        this.emitEvent();
        break;

      default:
    }
  }

}

export default new ThreadStore();

