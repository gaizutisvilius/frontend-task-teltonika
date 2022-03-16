import React from 'react';

// MUI
import { Box, Typography } from '@mui/material';

const Toolbox = (props) => {
  const { title, tools, children, ...otherProps } = props;

  return (
    <Box {...otherProps}>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          m: -1,
        }}
      >
        <Typography sx={{ m: 1 }} variant='h4'>
          {title}
        </Typography>
        {tools}
      </Box>
      {children}
    </Box>
  );
};

export default Toolbox;
