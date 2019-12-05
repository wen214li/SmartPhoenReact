import React from 'react';
import Typography from '@material-ui/core/Typography';

// const useStyles = makeStyles(theme => ({
//   // p: 5,
// }));

export default function Deposits(props) {
  // const classes = useStyles();
  return (
    <React.Fragment>
      <Typography component="p" variant="h6" color="primary">
        <font color='#2a4053'>{props.name}</font>
      </Typography>
      <Typography component="p" variant="h4">
        <font color='#808e9d'><b>{props.value}</b></font>
      </Typography>
      <Typography component="p" variant="h6">
        <font color='#2a4053'>{props.text}</font>
      </Typography>
    </React.Fragment>
  );
}
