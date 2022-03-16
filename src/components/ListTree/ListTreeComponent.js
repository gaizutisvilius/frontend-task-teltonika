import React, { forwardRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

// MUI
import ListItem from '@mui/material/ListItem';

const ListTreeComponent = (props) => {
  const { onClick, link, children, sidebar, ...otherProps } = props;

  const { pathname } = useLocation();

  const active = link ? pathname === link : false;

  // Styles only if used in sidebar
  const styles = {
    backgroundColor: sidebar && active && 'rgba(242, 243, 251, 1)',
    color: sidebar && active ? 'primary.main' : 'neutral.500',
  };

  // If link is not set return the orinary ListItem
  if (!link || typeof link !== 'string') {
    return (
      <ListItem
        button
        children={children}
        onClick={onClick}
        sx={styles}
        {...otherProps}
      />
    );
  }

  // Return a ListItem with a link component
  return (
    <ListItem
      button
      children={children}
      component={forwardRef((props, ref) => (
        <NavLink exact='true' {...props} ref={ref} />
      ))}
      to={link}
      sx={styles}
      {...otherProps}
    />
  );
};

export default ListTreeComponent;
