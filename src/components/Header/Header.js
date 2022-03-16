import React from 'react';

// MUI
import { styled } from '@mui/material/styles';
import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  Toolbar,
  Tooltip,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

const HeaderRoot = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[3],
}));

const Header = (props) => {
  const { handleMenuToggle, ...otherProps } = props;

  return (
    <>
      <HeaderRoot
        sx={{
          left: {
            lg: 280,
          },
          width: {
            lg: 'calc(100% - 280px)',
          },
        }}
        {...otherProps}
      >
        <Toolbar
          disableGutters
          sx={{
            minHeight: 64,
            left: 0,
            px: 2,
          }}
        >
          <IconButton
            onClick={handleMenuToggle}
            sx={{
              display: {
                xs: 'inline-flex',
                lg: 'none',
              },
              pl: {
                xs: 0,
                sm: 1,
              },
            }}
          >
            <MenuIcon fontSize='small' />
          </IconButton>
          <Tooltip title='Search'>
            <IconButton sx={{ ml: 1 }}>
              <SearchIcon fontSize='small' />
            </IconButton>
          </Tooltip>
          <Box sx={{ flexGrow: 1 }} />
          <Avatar
            sx={{
              height: 40,
              width: 40,
              mr: {
                sm: 1,
                lg: 2,
              },
            }}
          ></Avatar>
        </Toolbar>
      </HeaderRoot>
    </>
  );
};

export default Header;
