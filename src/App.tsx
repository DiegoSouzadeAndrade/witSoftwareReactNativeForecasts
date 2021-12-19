import React from 'react';
import MainRouter from './routes/MainRouter';
import {Provider} from 'react-redux';
import store from './services/store';

const App = () => {
  return (
    <Provider store={store}>
      <MainRouter />
    </Provider>
  );
};

export default App;
