import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    appBarSpacer: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      height: '100vh',
      overflow: 'auto',
    },
    title: {
      flexGrow: 1,
    },
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
    paper: {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
    },
    fixedMidHeight: {
      height: 240,
    },
    fixedMinHeight: {
      height: 120,
    },
    fixedMaxHeight: {
      height: 360,
    },
  }));

export default function Android() {
  const classes = useStyles();  
  return (
    <main className={classes.content}>
      <div className={classes.appBarSpacer} />
      <Typography component="h4" variant="h6" color="Primary" gutterBottom>
        Android page
      </Typography>
    </main>
  );
}