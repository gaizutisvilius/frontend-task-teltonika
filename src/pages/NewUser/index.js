import React, { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { v4 as uuid } from 'uuid';

import * as actions from '../../redux/actions';

// MUI
import {
  Box,
  Container,
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';

// Custom components
import SEO from '../../components/SEO';
import Toolbox from '../../components/Toolbox';
import Form from '../../components/Form';
import SelectTree from '../../components/SelectTree';

const NewUser = (props) => {
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();

  const [selectedCategory, setSelectedCategory] = useState(null);

  const navigate = useNavigate();

  // Handlers
  const handleCatSelection = (selectedCategory) => {
    setSelectedCategory(selectedCategory);
  };
  const handleAddUser = useCallback(
    async (newUser) => {
      dispatch(actions.addUserStart());

      try {
        await dispatch(actions.addUserSuccess(newUser));
        await dispatch(
          actions.showAlert({
            bool: true,
            severity: 'success',
            msg: 'User added successfully',
          })
        );
        navigate('/');
      } catch (err) {
        await dispatch(actions.addUserFail());
        await dispatch(
          actions.showAlert({
            bool: true,
            severity: 'error',
            msg: 'Failed to add user',
          })
        );
      }
    },
    [dispatch, navigate]
  );

  const formik = useFormik({
    initialValues: {
      name: '',
      lastname: '',
      gender: '',
      age: '',
      email: '',
      password: '',
      category: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().max(255).required('Name is required'),
      lastname: Yup.string().max(255).required('Last Name is required'),
      gender: Yup.string()
        .oneOf(['male', 'female', 'other'])
        .required('Gender is required'),
      age: Yup.number()
        .positive('Age must be a positive value')
        .integer()
        .required('Age is required'),
      email: Yup.string()
        .email('Must be a valid email')
        .max(255)
        .required('Email is required'),
      password: Yup.string()
        .min(8, 'Password has to have at least 8 characters')
        .max(255)
        .required('Password is required'),
      // category: Yup.string().required(),
    }),
    onSubmit: async (values) => {
      const newValues = {
        id: uuid(),
        ...values,
        category: selectedCategory,
      };

      await handleAddUser(newValues);
    },
  });

  const options = data.categories;

  return (
    <>
      <SEO title='Teltonika Networks | New User' />
      <Box
        component='main'
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth='lg'>
          <Toolbox title='New User' />
          <Form
            title='Creation panel'
            subheader='All fields are required'
            handleSubmit={formik.handleSubmit}
            bntDisabled={formik.isSubmitting}
            btnText='Create User'
            overflow='visible'
          >
            <Grid container spacing={3}>
              <Grid item md={6} xs={12}>
                <TextField
                  error={Boolean(formik.touched.name && formik.errors.name)}
                  fullWidth
                  helpertext={formik.touched.name && formik.errors.name}
                  label='First Name'
                  name='name'
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  variant='outlined'
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  error={Boolean(
                    formik.touched.lastname && formik.errors.lastname
                  )}
                  fullWidth
                  helpertext={formik.touched.lastname && formik.errors.lastname}
                  label='Last Name'
                  name='lastname'
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.lastname}
                  variant='outlined'
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <FormControl
                  fullWidth
                  error={Boolean(formik.touched.gender && formik.errors.gender)}
                  helpertext={formik.touched.gender && formik.errors.gender}
                >
                  <InputLabel id='gender-label'>Gender</InputLabel>
                  <Select
                    labelId='gender-label'
                    label='Gender'
                    name='gender'
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.gender}
                    variant='outlined'
                  >
                    <MenuItem value={'male'}>Male</MenuItem>
                    <MenuItem value={'female'}>Female</MenuItem>
                    <MenuItem value={'other'}>Other</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  error={Boolean(formik.touched.age && formik.errors.age)}
                  fullWidth
                  helpertext={formik.touched.age && formik.errors.age}
                  label='Age'
                  name='age'
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.age}
                  variant='outlined'
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  error={Boolean(formik.touched.email && formik.errors.email)}
                  fullWidth
                  helpertext={formik.touched.email && formik.errors.email}
                  label='Email Address'
                  name='email'
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type='email'
                  value={formik.values.email}
                  variant='outlined'
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  error={Boolean(
                    formik.touched.password && formik.errors.password
                  )}
                  fullWidth
                  helpertext={formik.touched.password && formik.errors.password}
                  label='Password'
                  name='password'
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type='password'
                  value={formik.values.password}
                  variant='outlined'
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <FormControl fullWidth>
                  <SelectTree
                    data={options}
                    handleCatSelection={handleCatSelection}
                  />
                </FormControl>
              </Grid>
            </Grid>
          </Form>
        </Container>
      </Box>
    </>
  );
};

export default NewUser;
