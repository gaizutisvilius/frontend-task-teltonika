import React from 'react';
import { Link } from 'react-router-dom';

// MUI
import { Box, Divider, Drawer, Typography, useMediaQuery } from '@mui/material';

// Custom components
import MenuNav from './MenuNav';

const Menu = (props) => {
  const { menuOpen, handleMenuToggle } = props;

  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'), {
    defaultMatches: true,
    noSsr: false,
  });

  const content = (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
        }}
      >
        <div>
          <Box sx={{ px: 2, pt: 8 }}>
            <Link to='/'>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(242, 243, 251, 1)',
                  color: 'primary.main',
                  cursor: 'pointer',
                  py: '25px',
                  borderRadius: 1,
                }}
              >
                <Typography color='inherit' variant='subtitle1'>
                  Teltonika Networks
                </Typography>
              </Box>
            </Link>
          </Box>
        </div>
        <Divider
          sx={{
            my: 3,
          }}
        />
        <Box sx={{ flexGrow: 1, pb: 4 }}>
          <MenuNav />
        </Box>
      </Box>
    </>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor='left'
        open
        PaperProps={{
          sx: {
            width: 280,
          },
        }}
        variant='permanent'
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor='left'
      onClose={handleMenuToggle}
      open={menuOpen}
      PaperProps={{
        sx: {
          width: 280,
        },
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant='temporary'
    >
      {content}
    </Drawer>
  );
};

export default Menu;
