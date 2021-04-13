import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CardList from './CardList';
import AuthForm from './AuthForm';
import CardInfo from './CardInfo';
import AddCard from './AddCard';
import Logout from './Logout';
import Page404 from './Page404';

export default function SwitchFunc() {
  const { role } = useSelector((state) => state.userReducers.user);
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
        {role === 'admin' ? (
          <CardInfo />
        ) : (
          <Redirect to='/' />
        )}
      </Route>
      <Route exact path='/create'>
        {role === 'admin' ? (
          <AddCard />
        ) : (
          <Redirect to='/' />
        )}
      </Route>
      <Route path='/' component={Page404} />
    </Switch>
  );
}
