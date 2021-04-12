import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { logoutAC } from '../store/user/actions.js';

export default function Logout() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(logoutAC());
  }, []);
  return <>{state.userReducers.user.isAuth && <Redirect to='/' />}</>;
}
