import React from 'react';
import {
  FormControl,
  TextField,
  makeStyles,
  Box,
  Button,
} from '@material-ui/core';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { addCardSagaAC } from '../store/cards/actions.js';
import { Redirect } from 'react-router';

const width = 300;
const useStyles = makeStyles({
  root: {
    margin: 8,
    display: 'flex',
    justifyContent: 'center',
  },
  conteiner: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    border: 'solid 1px lightgrey',
    width: width,
    height: width + 50,
  },
  title: {
    marginTop: '2em',
    borderColor: 'red',
    width: '30ch',
  },
  description: {
    marginTop: '1em',
    height: width - 150,
  },
  button: { marginTop: '2em' },
});

export default function AddCard() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
    },
    onSubmit: ({ title, description }) => {
      dispatch(
        addCardSagaAC({
          title,
          description,
          token: state.userReducers.user.token,
        })
      );
    },
  });

  return (
    <Box className={classes.root} component='span' m={1}>
      <div className={classes.conteiner}>
        <form onSubmit={formik.handleSubmit}>
          <FormControl variant='outlined'>
            <TextField
              fullWidth
              id='title'
              name='title'
              label='Title'
              type='text'
              value={formik.values.title}
              placeholder='Enter title'
              onChange={formik.handleChange}
              className={classes.title}
              variant='outlined'
            />
            <TextField
              fullWidth
              id='description'
              name='description'
              label='Description'
              type='text'
              value={formik.values.description}
              placeholder='Enter description'
              onChange={formik.handleChange}
              className={classes.description}
              multiline
              rows={6}
              variant='outlined'
            />
            <Button
              className={classes.button}
              variant='contained'
              type='submit'
            >
              Save
            </Button>
          </FormControl>
        </form>
      </div>
    </Box>
  );
}
