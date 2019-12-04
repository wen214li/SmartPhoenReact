import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

// const useStyles = makeStyles(theme => ({
//   // p: 5,
// }));

export default function Deposits(props) {
  // const classes = useStyles();
  return (
    <React.Fragment>
      <Typography component="p" variant="h6" color="primary">
        {props.name}
      </Typography>
      <Typography component="p" variant="h4">
        <b>{props.value}</b>
      </Typography>
      <Typography component="p" variant="h7">
        {props.text}
      </Typography>
    </React.Fragment>
  );
}
