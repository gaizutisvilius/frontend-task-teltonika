import React from 'react';
import { useLocation } from 'react-router-dom';

// Custom components
import ListTree from '../ListTree';

const MenuNavItem = (props) => {
  const { link, itemstyle } = props;

  const { pathname } = useLocation();

  const active = link ? pathname === link : false;

  return (
    <ListTree
      {...props}
      disableGutters
      sidebar='true'
      sx={{
        backgroundColor: active && 'rgba(242, 243, 251, 1)',
        color: active ? 'primary.main' : 'neutral.500',
        ...itemstyle,
      }}
    />
  );
};

export default MenuNavItem;
