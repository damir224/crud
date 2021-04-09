import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';

import Button from '@material-ui/core/Button';

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
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.pos}>
        <Button color='inherit'>Home</Button>

        <Button color='inherit'>Login</Button>
      </AppBar>
    </div>
  );
}
