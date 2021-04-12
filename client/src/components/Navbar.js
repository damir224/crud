import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';

import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  pos: {
    display: 'flex',
    justifyItems: 'center',
    position: 'static',
  },
}));

export default function Navbar() {
  const state = useSelector((state) => state);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.pos}>
        <Link to='/'>Home</Link>
        {state.userReducers.user.isAuth ? (
          <Link to='/logout'>Logout</Link>
        ) : (
          <>
            <Link to='/login'>Login</Link>
            <Link to='/signup'>Sign up</Link>
          </>
        )}
      </AppBar>
    </div>
  );
}
