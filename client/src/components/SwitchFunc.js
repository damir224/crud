import React from 'react';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';

import CardList from './CardList.js';
import AuthForm from './AuthForm.js';
import CardInfo from './CardInfo';
import AddCard from './AddCard';

import Logout from './Logout.js';

export default function SwitchFunc() {
  return (
    <Switch>
      <Route exact path='/'>
        <CardList />
      </Route>
      <Route path='/login'>
        <AuthForm type={'login'} />
      </Route>
      <Route path='/logout'>
        <Logout />
      </Route>
      <Route path='/signup'>
        <AuthForm type={'signup'} />
      </Route>
      <Route exact path='/info/:id'>
        <CardInfo />
      </Route>
      <Route exact path='/create'>
        <AddCard />
      </Route>
    </Switch>
  );
}
