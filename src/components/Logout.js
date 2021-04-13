import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { logoutAC } from '../store/user/actions';

export default function Logout() {
  const { isAuth } = useSelector((state) => state.userReducers.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(logoutAC());
  }, [dispatch]);
  return <>{isAuth && <Redirect to='/' />}</>;
}
