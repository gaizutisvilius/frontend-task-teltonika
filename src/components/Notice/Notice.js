import React, { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import * as actions from '../../redux/actions';

// MUI
import { styled } from '@mui/material/styles';
import { Alert } from '@mui/material';

const NoticeRoot = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: '50%',
  width: '60%',
  m: '0 auto',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    borderRadius: 0,
  },
  borderRadius: '8px',
  transform: 'translateX(-50%)',
  zIndex: 2000,
}));

const Notice = (props) => {
  const dispatch = useDispatch();

  const handleHideNotice = useCallback(() => {
    dispatch(actions.hideAlert());
  }, [dispatch]);

  // Hide notice after some time
  useEffect(
    () => window.setTimeout(() => handleHideNotice(), 7 * 1000),
    [handleHideNotice]
  );

  return (
    <NoticeRoot>
      <Alert
        severity={props.severity}
        sx={{
          borderRadius: 'inherit',
        }}
      >
        {props.message}
      </Alert>
    </NoticeRoot>
  );
};

export default Notice;
