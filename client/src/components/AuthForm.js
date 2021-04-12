// Render Prop
import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { useDispatch, useSelector } from 'react-redux';
import { signupSagaAC, loginSagaAC } from '../store/user/actions.js';
import { Redirect } from 'react-router';

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(3, 'Password should be of minimum 6 characters length')
    .required('Password is required'),
  name: yup
    .string('Enter your first name')
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  last_name: yup.string().min(2, 'Too Short!').max(50, 'Too Long!'),
  birthdate: yup
    .date()
    .min('1924-05-01', 'Too old!')
    .max('2021-03-01', 'Too young!'),
});

const AuthForm = ({ type }) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: 'admin@noveogroup.com',
      password: 'password',
      name: 'Tester',
      last_name: 'Testson',
      birthdate: '1974-05-01',
    },
    validationSchema: validationSchema,
    onSubmit: ({ email, password, name, last_name, birthdate }) => {
      console.log(1);
      if (type === 'login') {
        console.log(type === 'login');
        dispatch(loginSagaAC({ email, password }));
      } else {
        console.log(type === 'login');
        dispatch(signupSagaAC({ email, password, name, last_name, birthdate }));
      }
    },
  });

  return (
    <div>
      {state.userReducers.user.isAuth && <Redirect to='/' />}
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id='email'
          name='email'
          label='Email'
          type='email'
          value={formik.values.email}
          placeholder={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          fullWidth
          id='password'
          name='password'
          label='Password'
          type='password'
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        {type === 'signup' && (
          <TextField
            fullWidth
            id='name'
            name='name'
            label='Name'
            type='name'
            // value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
        )}
        {type === 'signup' && (
          <TextField
            fullWidth
            id='last_name'
            name='last_name'
            label='Last name'
            type='text'
            // value={formik.values.last_name}
            onChange={formik.handleChange}
            error={formik.touched.last_name && Boolean(formik.errors.last_name)}
            helperText={formik.touched.last_name && formik.errors.last_name}
          />
        )}
        {type === 'signup' && (
          <TextField
            fullWidth
            id='birthdate'
            name='birthdate'
            label='Birth date'
            type='date'
            // value={formik.values.birthdate}
            onChange={formik.handleChange}
            error={formik.touched.birthdate && Boolean(formik.errors.birthdate)}
            helperText={formik.touched.birthdate && formik.errors.birthdate}
          />
        )}
        <Button color='primary' variant='contained' fullWidth type='submit'>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default AuthForm;
