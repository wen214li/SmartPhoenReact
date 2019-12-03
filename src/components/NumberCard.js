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
      {/* <Grid container wrap="nowrap">
        <Grid item alignItem='center'>
          <Typography component="p" variant="button">
            {props.name}
          </Typography>
        </Grid>
        <Grid item>
          <Typography component="p" variant="h6" color="secondary">
            <font size='4' color='#FFFFF'><b>{props.value}{props.text}</b></font>
          </Typography>
        </Grid>
      </Grid> */}
      <Typography component="p" variant="h5">
        {props.name}
      </Typography>
      <Typography component="p" variant="h3" color="secondary">
        <font size='5' color='#FFFFF'><b>{props.value}{props.text}</b></font>
      </Typography>
    </React.Fragment>
  );
}
