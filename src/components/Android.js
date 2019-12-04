import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import BarChart from './BarChart';


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
      <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={2}>
            {/* Chart */}
            <Grid item xs={12} md={7} lg={7}>
              <Paper className={fixedMaxHeightPaper}>
                <BarChart dataURL='http://localhost:4000/androiduser' />
              </Paper>
            </Grid>
            {/* Chart */}
            <Grid item xs={12} md={5} lg={5}>
              <Paper className={fixedMaxHeightPaper}>
              </Paper>
            </Grid>
            {/* Chart */}
            <Grid item xs={12} md={12} lg={12}>
              <Paper className={fixedMaxHeightPaper}>
              <BarChart dataURL='http://localhost:4000/googleplayapps' />
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