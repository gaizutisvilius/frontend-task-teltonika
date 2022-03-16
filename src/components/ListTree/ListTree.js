import React, { useState } from 'react';

// MUI
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Collapse from '@mui/material/Collapse';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';

// Custom components
import ListTreeComponent from './ListTreeComponent';

const ListTree = (props) => {
  const [open, setOpen] = useState(false);

  const { label, link, Icon, children = [], sidebar, ...otherProps } = props;
  const isExpandable = children && children.length > 0;

  const handleClick = () => {
    setOpen(!open);
  };

  const ListTreeRoot = (
    <ListTreeComponent
      link={link}
      onClick={handleClick}
      sidebar={sidebar}
      {...otherProps}
    >
      {/* Display an icon if any */}
      {!!Icon && (
        <ListItemIcon>
          <Icon />
        </ListItemIcon>
      )}
      <ListItemText primary={label} inset={!Icon} />
      {/* Display the expand menu if the item has children */}
      {isExpandable && !open && <ExpandMoreIcon />}
      {isExpandable && open && <ExpandLessIcon />}
    </ListTreeComponent>
  );

  const ListTreeChildren = isExpandable ? (
    <Collapse in={open} timeout='auto' unmountOnExit sx={{ pl: 2 }}>
      <Divider />
      <List component='div' disablePadding>
        {children.map((item, index) => (
          <ListTree {...item} key={index} />
        ))}
      </List>
    </Collapse>
  ) : null;

  return (
    <>
      {ListTreeRoot}
      {ListTreeChildren}
    </>
  );
};

export default ListTree;
