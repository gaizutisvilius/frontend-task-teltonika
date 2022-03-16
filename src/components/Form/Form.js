import React from 'react';

// MUI
import {
  Box,
  Button,
  Card,
  CardHeader,
  CardContent,
  Divider,
} from '@mui/material';

const Form = (props) => {
  const {
    title,
    subheader,
    handleSubmit,
    children,
    bntDisabled,
    btnText,
    overflow,
  } = props;

  return (
    <form onSubmit={handleSubmit}>
      <Card
        maxwidth='sm'
        sx={{
          my: 3,
          overflow: overflow && overflow,
        }}
      >
        <CardHeader subheader={subheader} title={title} />
        <Divider />
        <CardContent>{children}</CardContent>
        <Divider />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2,
          }}
        >
          <Button
            color='primary'
            disabled={bntDisabled}
            type='submit'
            variant='contained'
          >
            {btnText}
          </Button>
        </Box>
      </Card>
    </form>
  );
};

export default Form;
