import React from 'react';
import { NavLink } from 'react-router-dom';

// MUI
import { Box, Button, Tooltip } from '@mui/material';

// Custom components
import { DownloadIcon } from '../../assets/icons';

const UsersToolboxItems = (props) => {
  const data =
    'text/json;charset=utf-8,' +
    encodeURIComponent(JSON.stringify(props.data, null, 2));

  return (
    <Box sx={{ m: 1 }}>
      <Tooltip title='Export to JSON'>
        <a href={'data:' + data} download='data.json'>
          <Button
            startIcon={<DownloadIcon fontSize='small' />}
            sx={{
              mr: 1,
            }}
          >
            Export
          </Button>
        </a>
      </Tooltip>
      <NavLink to='/new-user'>
        <Button color='primary' variant='contained'>
          Add User
        </Button>
      </NavLink>
    </Box>
  );
};

export default UsersToolboxItems;
