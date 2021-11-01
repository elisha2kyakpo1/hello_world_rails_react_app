import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/ConfigureStore';
import Greeting from './Greeting';

function App() {
  return (
    <Provider store={store}>
      <Greeting />
    </Provider>
  );
}

export default App;
