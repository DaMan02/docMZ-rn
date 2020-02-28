import 'react-native-gesture-handler';
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './src/reducer';

const store = createStore(reducer);

AppRegistry.registerComponent(appName, () => () => (
    <Provider store={store}>
      <App />
    </Provider>
  ));
