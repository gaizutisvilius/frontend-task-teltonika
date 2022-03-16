import React, { useEffect, useRef } from 'react';

// MUI
import { Box, Toolbar, Typography } from '@mui/material';

const Footer = (props) => {
  const copyright = useRef(null);

  // Get current year for copyright
  useEffect(() => {
    copyright.current.appendChild(
      document.createTextNode(new Date().getFullYear())
    );
  }, []);

  return (
    <Box
      component='footer'
      sx={{
        flexGrow: 1,
        py: 1,
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          minHeight: 64,
          left: 0,
          px: 2,
        }}
      >
        <Typography
          sx={{
            mr: {
              sm: 1,
              lg: 2,
            },
          }}
        >
          &copy; <span ref={copyright}></span> All rights reserved.
        </Typography>
      </Toolbar>
    </Box>
  );
};

export default Footer;
