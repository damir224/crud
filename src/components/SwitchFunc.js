import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import CardList from './CardList.js';
import AuthForm from './AuthForm.js';
import CardInfo from './CardInfo';
import AddCard from './AddCard';
import Logout from './Logout.js';
import Page404 from './Page404.js';
import { useSelector } from 'react-redux';

export default function SwitchFunc() {
  const state = useSelector((state) => state);
  return (
    <Switch>
      <Route exact path='/'>
        <CardList />
      </Route>
      <Route exact path='/login'>
        <AuthForm type={'login'} />
      </Route>
      <Route exact path='/logout'>
        <Logout />
      </Route>
      <Route exact path='/signup'>
        <AuthForm type={'signup'} />
      </Route>
      <Route exact path='/info/:id'>
        {state.userReducers.user.role === 'admin' ? (
          <CardInfo />
        ) : (
          <Redirect to='/' />
        )}
      </Route>
      <Route exact path='/create'>
        {state.userReducers.user.role === 'admin' ? (
          <AddCard />
        ) : (
          <Redirect to='/' />
        )}
      </Route>
      <Route path='/' component={Page404} />
    </Switch>
  );
}
