import React from 'react';
import { useSelector } from 'react-redux';

// MUI
import { Box, Container } from '@mui/material';

// Custom components
import Toolbox from '../../components/Toolbox';
import ToolboxSearch from '../../components/Toolbox/ToolboxSearch';
import UsersToolboxItems from '../../components/Users/UsersToolboxItems';
import UsersList from '../../components/Users';

const Users = () => {
  const { data } = useSelector((state) => state);

  const currentUsers = data.isSearchActive ? data.foundUsers : data.users;
  const exportData = {
    users: currentUsers,
    categories: data.categories,
  };

  return (
    <Box
      component='main'
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth={false}>
        <Toolbox title='Users' tools={<UsersToolboxItems data={exportData} />}>
          <ToolboxSearch placeholder='Search users' />
        </Toolbox>
        <Box sx={{ mt: 3 }}>
          <UsersList users={currentUsers} />
        </Box>
      </Container>
    </Box>
  );
};

export default Users;
