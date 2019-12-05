import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
// import LineChart from './LineChart';
import SingleBarChart from './SingleBarChart';
// import PieChart from './PieChart'
import Copyright from './Copyright'
import Box from '@material-ui/core/Box';
//import SingleLineGridList from './SingleLineGridList'
//import androidData from './androidData.js';

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
    paddingTop: theme.spacing(2),
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
  
  const fixedMaxHeightPaper = clsx(classes.paper, classes.fixedMaxHeight);

  return (
    <main className={classes.content}>
      <div className={classes.appBarSpacer} />
      <Container maxWidth="xl" className={classes.container}>
          <Grid container spacing={2}>
            {/* Chart */}
            <Grid item xs={12} md={6} lg={6}>
              <Paper className={fixedMaxHeightPaper}>
                <SingleBarChart dataURL='http://localhost:4000/androiduser' />
              </Paper>
            </Grid>
            {/* Chart */}
            <Grid item xs={12} md={6} lg={6}>
              <Paper className={fixedMaxHeightPaper}>
              </Paper>
            </Grid>
            {/* Chart */}
            <Grid item xs={12} md={12} lg={12}>
              <Paper className={fixedMaxHeightPaper}>
                <SingleBarChart dataURL='http://localhost:4000/googleplayapps' />
              </Paper>
            </Grid>
          </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>

        </Container>
    </main>
  );
}