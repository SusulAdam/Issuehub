import React from 'react';
import {Text, View} from 'react-native';
import {Provider} from 'react-redux';
import {Navigation} from './src/components';
import {store} from './src/redux/store';

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
