import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

// Custom hooks
import usePagination from '../../hooks/usePagination';

// MUI
import { Box, Pagination } from '@mui/material';

// Custom components
import UserBox from './UserBox';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    paritialVisibilityGutter: 60,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    paritialVisibilityGutter: 50,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 30,
  },
};

const UsersBoxes = (props) => {
  const { users } = props;

  let [page, setPage] = useState(1);
  const itemsPerPage = 5;

  const count = Math.ceil(users.length / itemsPerPage);
  const usersPerPage = usePagination(users, itemsPerPage);

  // Handlers
  const handleChange = (e, p) => {
    setPage(p);
    usersPerPage.jump(p);
  };

  return (
    <Box
      sx={{
        cursor: 'grab',
      }}
    >
      <Carousel
        swipeable={true}
        draggable={true}
        responsive={responsive}
        showDots={true}
        autoPlay={false}
        keyBoardControl={true}
        removeArrowOnDeviceType={['desktop', 'tablet', 'mobile']}
      >
        {usersPerPage
          .currentData()
          .map(
            ({ name, lastname, gender, age, email, password, category }, i) => (
              <UserBox
                key={i}
                name={name}
                lastname={lastname}
                gender={gender}
                age={age}
                email={email}
                password={password}
                category={category}
              />
            )
          )}
      </Carousel>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          mt: 3,
        }}
      >
        <Pagination
          count={count}
          page={page}
          variant='outlined'
          onChange={handleChange}
        />
      </Box>
    </Box>
  );
};

export default UsersBoxes;
