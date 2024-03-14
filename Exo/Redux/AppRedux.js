// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import MainScreen from './MainScreen';

const AppRedux = () => {
  return (
    <Provider store={store}>
      <MainScreen />
    </Provider>
  );
};

export default AppRedux;
