import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import * as actions from '../../redux/actions';

// MUI
import { Box, Container, Grid, TextField } from '@mui/material';

// Custom components
import Toolbox from '../../components/Toolbox';
import Form from '../../components/Form';
import InputFieldWithChip from '../../components/TagsInput/InputFieldWithChip';

const NewCategory = (props) => {
  const [subcategories, setSubcategories] = useState(null);
  const [subsubcategories1, setSubsubcategories1] = useState(null);
  const [subsubcategories2, setSubsubcategories2] = useState(null);
  const [subsubcategories3, setSubsubcategories3] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Handlers
  const handleAddCategory = useCallback(
    async (newCategory) => {
      dispatch(actions.addCategoryStart());

      try {
        await dispatch(actions.addCategorySuccess(newCategory));
        await dispatch(
          actions.showAlert({
            bool: true,
            severity: 'success',
            msg: 'Category added successfully',
          })
        );
        navigate('/');
      } catch (err) {
        await dispatch(actions.addCategoryFail());
        await dispatch(
          actions.showAlert({
            bool: true,
            severity: 'error',
            msg: 'Failed to add category',
          })
        );
      }
    },
    [dispatch, navigate]
  );

  const formik = useFormik({
    initialValues: {
      categoryName: '',
    },
    validationSchema: Yup.object({
      categoryName: Yup.string().max(255).required('Category Name is required'),
    }),
    onSubmit: async (values) => {
      const newValues = await {
        label: values.categoryName,
        children:
          subcategories.length > 0 &&
          subcategories.map((subcat, i) => {
            return {
              label: subcat,
              children:
                (i === 0 &&
                  subsubcategories1.length > 0 &&
                  subsubcategories1.map((subsubcat) => {
                    return {
                      label: subsubcat,
                    };
                  })) ||
                (i === 1 &&
                  subsubcategories2.length > 0 &&
                  subsubcategories2.map((subsubcat) => {
                    return {
                      label: subsubcat,
                    };
                  })) ||
                (i === 2 &&
                  subsubcategories3.length > 0 &&
                  subsubcategories3.map((subsubcat) => {
                    return {
                      label: subsubcat,
                    };
                  })),
            };
          }),
      };

      await handleAddCategory(newValues);
    },
  });

  return (
    <Box
      component='main'
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth='lg'>
        <Toolbox title='New Category' />
        <Form
          title='Creation panel'
          subheader={`Only the first field is required (fill out subcategories first)`}
          handleSubmit={formik.handleSubmit}
          bntDisabled={formik.isSubmitting}
          btnText='Create Category'
        >
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                error={Boolean(
                  formik.touched.categoryName && formik.errors.categoryName
                )}
                fullWidth
                helpertext={
                  formik.touched.categoryName && formik.errors.categoryName
                }
                label='Category Name'
                name='categoryName'
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.categoryName}
                variant='outlined'
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <InputFieldWithChip
                id='subcategories'
                name='subcategories'
                placeholder='Add subcategories'
                label='Subcategories'
                setItems={setSubcategories}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <InputFieldWithChip
                id='subsubcategories1'
                name='subsubcategories1'
                placeholder='Add subsubcategories #1'
                label='Subsubcategories #1'
                setItems={setSubsubcategories1}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <InputFieldWithChip
                id='subsubcategories2'
                name='subsubcategories2'
                placeholder='Add subsubcategories #2'
                label='Subsubcategories #2'
                setItems={setSubsubcategories2}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <InputFieldWithChip
                id='subsubcategories3'
                name='subsubcategories3'
                placeholder='Add subsubcategories #3'
                label='Subsubcategories #3'
                setItems={setSubsubcategories3}
              />
            </Grid>
          </Grid>
        </Form>
      </Container>
    </Box>
  );
};

export default NewCategory;
