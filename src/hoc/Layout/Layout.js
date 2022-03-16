import React, { useState } from 'react';
import { useSelector } from 'react-redux';

// MUI
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

// Custom components
import Notice from '../../components/Notice';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';

const LayoutRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  flex: '1 1 auto',
  maxWidth: '100%',
  paddingTop: 64,
  [theme.breakpoints.up('lg')]: {
    paddingLeft: 280,
  },
}));

const Layout = (props) => {
  const { children } = props;

  const { alert } = useSelector((state) => state);

  const [menuOpen, setMenuOpen] = useState(true);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <LayoutRoot>
        <Box
          sx={{
            display: 'flex',
            flex: '1 1 auto',
            flexDirection: 'column',
            width: '100%',
          }}
        >
          {children}
        </Box>
      </LayoutRoot>

      {alert.show && <Notice severity={alert.severity} message={alert.msg} />}
      <Header handleMenuToggle={handleMenuToggle} />
      <Menu menuOpen={menuOpen} handleMenuToggle={handleMenuToggle} />
      <Footer />
    </>
  );
};

export default Layout;
