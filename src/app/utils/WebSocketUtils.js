/* WebsocketUtils for echo service */

import MessageActionCreators from '../actions/MessageActionCreators';
import AppConstants from '../constants/AppConstants';

const WEB_SOCKETS_CONFIG = AppConstants.WEB_SOCKETS_CONFIG;

/* WebSocketUtils POJO Singleton */

const WebSocketUtils = {
  webSocket: null,
  uri: WEB_SOCKETS_CONFIG.URI,

  /**
   * Initialize Websockets and attach respective methods to events
   */

  init() {
    this.webSocket = new WebSocket(this.uri);
    this.webSocket.onopen = (event) => {
      this.onOpen(event);
    };
    this.webSocket.onclose = (event) => {
      this.onClose(event);
    };
    this.webSocket.onmessage = (event) => {
      this.onMessage(event);
    };
    this.webSocket.onerror = (event) => {
      this.onError(event);
    };
  },
  onOpen(event) {
    console.log('Open', event);
  },
  onClose(event) {
    console.log('Close', event);
  },
  onError(event) {
    console.log('Error', event);
  },
  onMessage(event) {
    MessageActionCreators.receiveMessage(event.data);
  },

  /**
   * Send message to echo service
   * @param {string} text
   */


  doSend(text) {
    this.webSocket.send(text);
  }
};

export default WebSocketUtils;
