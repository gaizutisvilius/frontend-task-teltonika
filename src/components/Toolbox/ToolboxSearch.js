import React from 'react';
import { useDispatch } from 'react-redux';

import * as actions from '../../redux/actions';

// MUI
import {
  Box,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const ToolboxSearch = (props) => {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    const searchText = e.target.value.trim().replace(/" "/g, '');

    dispatch(actions.searchUsers(searchText));
  };

  return (
    <Box sx={{ mt: 3 }}>
      <Card>
        <CardContent>
          <Box sx={{ maxWidth: 500 }}>
            <TextField
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <SvgIcon color='action' fontSize='small'>
                      <SearchIcon />
                    </SvgIcon>
                  </InputAdornment>
                ),
              }}
              placeholder={props.placeholder}
              variant='outlined'
              onChange={handleSearch}
            />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ToolboxSearch;
