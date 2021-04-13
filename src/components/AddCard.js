import React from 'react';
import {
  FormControl,
  TextField,
  makeStyles,
  Box,
  Button
} from '@material-ui/core';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { addCardSagaAC } from '../store/cards/actions';

const width = 300;
const useStyles = makeStyles({
  root: {
    margin: 8,
    display: 'flex',
    justifyContent: 'center'
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    border: 'solid 1px lightgrey',
    width,
    height: width + 50
  },
  title: {
    marginTop: '2em',
    borderColor: 'red',
    width: '30ch'
  },
  description: {
    marginTop: '1em',
    height: width - 150
  },
  button: { marginTop: '2em' }
});

export default function AddCard() {
  const { token } = useSelector((state) => state.userReducers.user);
  const dispatch = useDispatch();
  const classes = useStyles();
  const refDone = React.useRef(false);
  const formik = useFormik({
    initialValues: {
      title: '',
      description: ''
    },
    onSubmit: async ({ title, description }) => {
      await dispatch(
        addCardSagaAC({
          title,
          description,
          token
        })
      );
      refDone.current = true;
    }
  });

  return (
    <Box className={classes.root} component='span' m={1}>
      {refDone.current && <Redirect to='/' />}
      <div className={classes.container}>
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
