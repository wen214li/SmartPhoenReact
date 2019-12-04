import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

export default function Title(props) {

  return (
    <Typography component="h5" variant="h6" color="primary" gutterBottom>
      <font size='4' color='#2a4053'>{props.children}</font>
    </Typography>
  );
}

Title.propTypes = {
  children: PropTypes.node,
};
