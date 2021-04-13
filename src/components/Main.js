import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../store';
import SwitchFunc from './SwitchFunc';
import Navbar from './Navbar';

function Main() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <SwitchFunc />
      </BrowserRouter>
    </Provider>
  );
}

export default Main;
