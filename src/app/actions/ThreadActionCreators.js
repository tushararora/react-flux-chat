import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';
import APIUtils from '../utils/APIUtils';

const ACTION_TYPES = AppConstants.ACTION_TYPES;

/* ThreadActionCreators for thread actions */

const ThreadActionCreators = {

  /**
   * Click thread and dispatch to ThreadStore
   * @param {number} threadId
   */

  clickThread(threadId) {
    AppDispatcher.dispatch({
      type: ACTION_TYPES.CLICK_THREAD,
      threadId
    });
    APIUtils.fetchAllMessages(threadId);
  },

  /**
   * Recieve threads and dispatch to ThreadStore
   * @param {array} threads
   */

  receiveAllThreads(threads) {
    AppDispatcher.dispatch({
      type: ACTION_TYPES.RECEIVE_ALL_THREADS,
      threads
    });
  }
};

export default ThreadActionCreators;
