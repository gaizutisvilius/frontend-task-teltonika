import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

//  MUI
import { Box, List, ListSubheader, Typography, Divider } from '@mui/material';

// Custom components
import MenuNavItem from './MenuNavItem';

// Utils
import { convertToSlug } from '../../shared/utils';

const MenuNav = (props) => {
  const error = useSelector((state) => state.data.error);
  const categories = useSelector((state) => state.data.categories);

  // Set up menu creation items
  const menuCreationList = [
    {
      label: 'New User',
      link: '/new-user',
    },
    {
      label: 'New Category',
      link: '/new-category',
    },
  ];

  //TODO: DOES NOT WORK AS INTENDED
  // Create links for menu browsing items
  // const menuBrowsingList = useMemo(
  //   () =>
  //     categories &&
  //     categories.map((cat) => {
  //       // If category has children
  //       if (cat.children) {
  //         // If category's children has children
  //         if (cat.children[0].children) {
  //           const newCatItems = cat.children.map((item) => {
  //             return item.children.map((subitem) => {
  //               return {
  //                 ...subitem,
  //                 link: `/users/category/${convertToSlug(
  //                   cat.label
  //                 )}/${convertToSlug(item.label)}/${convertToSlug(
  //                   subitem.label
  //                 )}`,
  //               };
  //             });
  //           });

  //           return {
  //             ...cat,
  //             children: cat.children.map((item) => {
  //               return {
  //                 ...item,
  //                 children: newCatItems[0],
  //               };
  //             }),
  //           };
  //         }
  //         // If category's children has no children
  //         else {
  //           const newCatItems = cat.children.map((item) => {
  //             return {
  //               ...item,
  //               link: `/users/category/${convertToSlug(
  //                 cat.label
  //               )}/${convertToSlug(item.label)}`,
  //             };
  //           });

  //           return {
  //             ...cat,
  //             children: newCatItems,
  //           };
  //         }
  //       }

  //       // If category has no children
  //       return {
  //         ...cat,
  //         link: `/users/category/${convertToSlug(cat.label)}`,
  //       };
  //     }),
  //   [categories]
  // );

  const itemStyle = {
    borderRadius: 1,
    fontWeight: 600,
    justifyContent: 'flex-start',
    textAlign: 'left',
    textTransform: 'none',
    width: '100%',
    py: 1,
    px: 2,
    my: 0.5,
    '&:hover': {
      backgroundColor: 'rgba(242, 243, 251, 1)',
    },
    '& div': {
      paddingLeft: 'unset',
      '& span': {
        fontWeight: 500,
      },
    },
  };

  return (
    <div>
      <Box sx={{ px: 2 }}>
        <List
          component='nav'
          disablePadding
          sx={{
            '[role*=button], a': {
              ...itemStyle,
            },
          }}
        >
          <ListSubheader
            disableSticky={true}
            aria-labelledby='nested-list-subheader'
          >
            Create New
          </ListSubheader>
          {menuCreationList.map((item, index) => (
            <MenuNavItem {...item} key={index} itemstyle={itemStyle} />
          ))}
        </List>
      </Box>
      <Divider
        sx={{
          my: 3,
        }}
      />
      <Box sx={{ px: 2 }}>
        <List
          component='nav'
          disablePadding
          sx={{
            '[role*=button], a': {
              ...itemStyle,
            },
          }}
        >
          <ListSubheader
            disableSticky={true}
            aria-labelledby='nested-list-subheader'
          >
            Browse Categories
          </ListSubheader>
          {error ? (
            <Typography
              variant='body2'
              gutter
              component='div'
              sx={{
                px: 2,
              }}
            >
              No data available
            </Typography>
          ) : (
            categories.map((item, index) => (
              <MenuNavItem {...item} key={index} />
            ))
          )}
        </List>
      </Box>
    </div>
  );
};

export default MenuNav;
