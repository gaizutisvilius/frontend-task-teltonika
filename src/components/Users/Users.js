import React from 'react';

// Custom hooks
import useWindowSize from '../../hooks/useWindowSize';

// Custom components
import UsersTable from '../../components/Users/UsersTable';
import UsersBoxes from '../../components/Users/UsersBoxes';

const Users = (props) => {
  const { users } = props;

  const winsize = useWindowSize();

  return (
    <>
      {winsize.width <= 1000 ? (
        <UsersBoxes users={users} />
      ) : (
        <UsersTable users={users} />
      )}
    </>
  );
};

export default Users;
