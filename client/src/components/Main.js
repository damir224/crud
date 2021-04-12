import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from '../store';
import SwitchFunc from './SwitchFunc.js';
import { Route, BrowserRouter as Router, Link } from 'react-router-dom';
import CardList from './CardList.js';
import AuthForm from './AuthForm.js';
import CardInfo from './CardInfo';
import AddCard from './AddCard';
import Navbar from './Navbar';
import { logoutAC } from '../store/user/actions.js';

function Main() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Router>
          <Navbar />
          <SwitchFunc />
        </Router>
      </BrowserRouter>
    </Provider>
  );
}

export default Main;
