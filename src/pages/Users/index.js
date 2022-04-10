import React from 'react';
import { useSelector } from 'react-redux';

// MUI
import { Box, Container } from '@mui/material';

// Custom components
import SEO from '../../components/SEO';
import Toolbox from '../../components/Toolbox';
import ToolboxSearch from '../../components/Toolbox/ToolboxSearch';
import UsersToolboxItems from '../../components/Users/UsersToolboxItems';
import UsersList from '../../components/Users';

const Users = () => {
  const users = useSelector((state) => state.data.users);
  const categories = useSelector((state) => state.data.categories);
  const foundUsers = useSelector((state) => state.data.foundUsers);
  const isSearchActive = useSelector((state) => state.data.isSearchActive);

  const currentUsers = isSearchActive ? foundUsers : users;
  const exportData = {
    users: currentUsers,
    categories: categories,
  };

  return (
    <>
      <SEO title='Teltonika Networks | Users' />
      <Box
        component='main'
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth={false}>
          <Toolbox
            title='Users'
            tools={<UsersToolboxItems data={exportData} />}
          >
            <ToolboxSearch placeholder='Search users' />
          </Toolbox>
          <Box sx={{ mt: 3 }}>
            <UsersList users={currentUsers} />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Users;
