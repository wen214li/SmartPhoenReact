import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';


export default function Deposits(props) {
  
  return (
    <React.Fragment>
      <Title>{props.name}</Title>
      <Typography component="p" variant="h6">
        {props.value}
      </Typography>
    </React.Fragment>
  );
}
