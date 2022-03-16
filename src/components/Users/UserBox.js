import React from 'react';

// MUI
import {
  Card,
  CardHeader,
  CardContent,
  Avatar,
  IconButton,
  Grid,
  List,
  ListSubheader,
  ListItem,
  ListItemText,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const UserBox = (props) => {
  const { name, lastname, gender, age, email, password, category } = props;

  const userDetails = {
    properties: ['Gender', 'Age', 'Email', 'Password'],
    values: [gender, age, email, password],
  };

  return (
    <Card>
      <CardHeader
        avatar={<Avatar aria-label='user' />}
        action={
          <IconButton aria-label='user-card-action'>
            <MoreVertIcon />
          </IconButton>
        }
        title={`${name} ${lastname}`}
        subheader={category}
      />
      <CardContent>
        <ListSubheader disableSticky={true} aria-labelledby='user-details'>
          User details
        </ListSubheader>
        <Grid container spacing={1}>
          <Grid item md={4} xs={4}>
            <List component='ul' disablePadding>
              {userDetails.properties.map((property, i) => (
                <ListItem key={i}>
                  <ListItemText primary={property} />
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid item md={4} xs={4}>
            <List component='ul' disablePadding>
              {userDetails.values.map((value, i) => (
                <ListItem key={i}>
                  <ListItemText primary={value} />
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default UserBox;
