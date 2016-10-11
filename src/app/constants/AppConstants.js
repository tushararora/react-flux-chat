/* eslint quote-props: ["error", "always"] */
const AppConstants = {
  'ACTION_TYPES': {
    'CLICK_THREAD': 'CLICK_THREAD',
    'CREATE_MESSAGE': 'CREATE_MESSAGE',
    'RECEIVE_MESSAGES': 'RECEIVE_MESSAGES',
    'RECEIVE_CREATED_MESSAGE': 'RECEIVE_CREATED_MESSAGE',
    'RECEIVE_ALL_THREADS': 'RECEIVE_ALL_THREADS'
  },
  'DB_CONFIG': {
    'DB_NAME': 'demo',
    'VERSION': 1
  },
  'TIME_AGO': {
    'MIN_PERIOD': '60'
  },
  'WEB_SOCKETS_CONFIG': {
    'URI': 'ws://echo.websocket.org/'
  }
};

export default AppConstants;
