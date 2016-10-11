/* DBUtils for persisting data locally on the browser */

import Dexie from 'dexie';
import AppConstants from '../constants/AppConstants';

const DB_CONFIG = AppConstants.DB_CONFIG;

/* DBUtils POJO Singleton */

const DBUtils = {
  db: null,

  /**
   * Initialize indexedDB
   */

  init() {
    this.db = new Dexie(DB_CONFIG.DB_NAME);
    this.db.version(DB_CONFIG.VERSION).stores({
      messages: 'id, threadId, author, timestamp, createdAt'
    });
    this.db
      .open()
      .catch((e) => {
        console.log(`Open failed...${e}`);
      });
  },

  /**
   * Check if indexedDB is open
   * @return {boolean}
   */

  isOpen() {
    return this.db.isOpen();
  },

  /**
   * Add message to indexedDB store
   * @param {object} message
   * @return {Dexie.promise}
   */

  addMessage(message) {
    return this.db.messages.add(message);
  },

  /**
   * Get messages from indexedDB store for a particular threadID
   * @param {number} threadId
   * @return {Dexie.promise}
   */


  getAllMessages(threadId) {
    return this.db.messages.where('threadId').equals(threadId).toArray();
  }
};

export default DBUtils;
