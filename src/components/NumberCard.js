import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

const useStyles = makeStyles(theme => ({
  // p: 5,
}));

export default function Deposits(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Typography component="p" variant="button">
        {props.name}
      </Typography>
      <Typography component="p" variant="h6" color="secondary">
        <font size='4' color='#FFFFF'><b>{props.value}{props.text}</b></font>
      </Typography>
    </React.Fragment>
  );
}
