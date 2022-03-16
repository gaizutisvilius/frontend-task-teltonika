import React, { Suspense, useEffect, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import * as actions from './redux/actions';

// MUI
import { ThemeProvider, CssBaseline } from '@mui/material';
import GlobalStyles from '@mui/material/GlobalStyles';

// Theme
import { theme } from './theme';

// Components
import Layout from './hoc/Layout';

// Assets
import data from './assets/data';

// Lazy components
const NewUser = React.lazy(() => {
  return import('./pages/NewUser');
});
const NewCategory = React.lazy(() => {
  return import('./pages/NewCategory');
});
const Users = React.lazy(() => {
  return import('./pages/Users');
});

const App = () => {
  const dispatch = useDispatch();

  // Handlers
  const handleSetData = useCallback(
    (data) => {
      dispatch(actions.setData(data));
    },
    [dispatch]
  );

  // Initialize data
  useEffect(() => {
    handleSetData(data);
  }, [handleSetData]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles
        styles={{
          a: {
            '&:active': {
              color: 'unset',
            },
            textDecoration: 'none',
          },
        }}
      />
      <CssBaseline />
      <Layout>
        <Suspense fallback={null}>
          <Routes>
            <Route index element={<Users />} />
            <Route path='new-user' element={<NewUser />} />
            <Route path='new-category' element={<NewCategory />} />
            <Route path='users' element={<Users />}>
              <Route path='category/:cat' element={<Users />}>
                <Route path=':subcat' element={<Users />}>
                  <Route path=':subsubcat' element={<Users />} />
                </Route>
              </Route>
            </Route>
          </Routes>
        </Suspense>
      </Layout>
    </ThemeProvider>
  );
};

export default App;
