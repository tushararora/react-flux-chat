/* Message Utils POJO Singleton*/

  /**
   * Create message object
   * @param {string} text
   * @param {number} currentThreadId
   * @param {string} author
   * @return {object} message
   */

const MessageUtils = {
  getCreatedMessageData(text, currentThreadId, author) {
    const timestamp = Date.now();
    return {
      id: timestamp,
      threadId: currentThreadId,
      createdAt: timestamp,
      text,
      author
    };
  }
};

export default MessageUtils;
