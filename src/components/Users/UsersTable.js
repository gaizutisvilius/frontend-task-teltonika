import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import PerfectScrollbar from 'react-perfect-scrollbar';

import * as actions from '../../redux/actions';

// MUI
import {
  Box,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TablePagination,
  Tooltip,
  Toolbar,
  IconButton,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const headCells = [
  {
    id: 'name',
    label: 'Name',
  },
  {
    id: 'lastname',
    label: 'Last Name',
  },
  {
    id: 'gender',
    label: 'Gender',
  },
  {
    id: 'age',
    label: 'Age',
  },
  {
    id: 'email',
    label: 'Email',
  },
  {
    id: 'password',
    label: 'Password',
  },
  {
    id: 'category',
    label: 'Category',
  },
];

const UsersTable = (props) => {
  const { users } = props;

  const dispatch = useDispatch();

  const [selectedUserIds, setSelectedUserIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  // Handlers
  const handleSelectAll = (e) => {
    let newSelectedUserIds;

    if (e.target.checked) {
      newSelectedUserIds = users.map((user) => user.id);
    } else {
      newSelectedUserIds = [];
    }

    setSelectedUserIds(newSelectedUserIds);
  };

  const handleRemoveSelected = useCallback(
    (ids) => dispatch(actions.removeUsers(ids)),
    [dispatch]
  );

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedUserIds.indexOf(id);
    let newSelectedUserIds = [];

    if (selectedIndex === -1) {
      newSelectedUserIds = newSelectedUserIds.concat(selectedUserIds, id);
    } else if (selectedIndex === 0) {
      newSelectedUserIds = newSelectedUserIds.concat(selectedUserIds.slice(1));
    } else if (selectedIndex === selectedUserIds.length - 1) {
      newSelectedUserIds = newSelectedUserIds.concat(
        selectedUserIds.slice(0, -1)
      );
    } else if (selectedIndex > 0) {
      newSelectedUserIds = newSelectedUserIds.concat(
        selectedUserIds.slice(0, selectedIndex),
        selectedUserIds.slice(selectedIndex + 1)
      );
    }

    setSelectedUserIds(newSelectedUserIds);
  };

  const handleLimitChange = (e) => {
    setLimit(e.target.value);
  };

  const handlePageChange = (e, newPage) => {
    setPage(newPage);
  };

  return (
    <Card {...props} sx={{ overflow: 'auto' }}>
      <Box sx={{ minWidth: 1050 }}>
        <PerfectScrollbar>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding='checkbox'>
                  <Checkbox
                    checked={selectedUserIds.length === users.length}
                    color='primary'
                    indeterminate={
                      selectedUserIds.length > 0 &&
                      selectedUserIds.length < users.length
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell>
                {headCells.map((headCell) => (
                  <TableCell key={headCell.id}>{headCell.label}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {users.slice(0, limit).map((user) => (
                <TableRow
                  hover
                  key={user.id}
                  selected={selectedUserIds.indexOf(user.id) !== -1}
                >
                  <TableCell padding='checkbox'>
                    <Checkbox
                      checked={selectedUserIds.indexOf(user.id) !== -1}
                      onChange={(event) => handleSelectOne(event, user.id)}
                      value='true'
                    />
                  </TableCell>
                  {headCells.map((headCell, i) => {
                    const keys = Object.keys(user).slice(1);
                    return (
                      <TableCell key={headCell.id}>{user[keys[i]]}</TableCell>
                    );
                  })}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </PerfectScrollbar>
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Toolbar sx={{ px: '0 !important' }}>
          {selectedUserIds.length > 0 && (
            <Tooltip title='Delete'>
              <IconButton
                sx={{ ml: '5.5px' }}
                onClick={() => handleRemoveSelected(selectedUserIds)}
              >
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          )}
        </Toolbar>
        <TablePagination
          component='div'
          count={users.length}
          onPageChange={handlePageChange}
          onRowsPerPageChange={handleLimitChange}
          page={page}
          rowsPerPage={limit}
          rowsPerPageOptions={[5, 10, 25]}
          sx={{ overflow: 'unset' }}
        />
      </Box>
    </Card>
  );
};

export default UsersTable;
