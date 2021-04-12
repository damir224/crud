import React from 'react';
import { makeStyles, AppBar, Toolbar, Typography } from '@material-ui/core/';

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  link: {
    textDecoration: 'none',
    color: 'white',
  },
  pos: {
    display: 'flex',
    justifyItems: 'center',
    position: 'static',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Navbar() {
  const state = useSelector((state) => state);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.pos}>
        <Toolbar>
          <Typography variant='h6' className={classes.title}>
            <Link to='/' className={classes.link}>
              Home
            </Link>
          </Typography>
          <Typography color='inherit'>
            {state.userReducers.user.isAuth ? (
              <Link to='/logout' className={classes.link}>
                Logout
              </Link>
            ) : (
              <>
                <Link
                  to='/login'
                  style={{ marginRight: 10 }}
                  className={classes.link}
                >
                  Login
                </Link>
                <Link to='/signup' className={classes.link}>
                  Sign up
                </Link>
              </>
            )}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
