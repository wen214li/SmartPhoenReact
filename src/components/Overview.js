import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import NumberCard from './NumberCard';
import LineChart from './LineChart';
import StackedBarChart from './StackedBarChart';
import RadarChart from './RadarChart';
import PieChart from './PieChart'
import BarChart from './BarChart'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


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

export default function Overview() {
  const classes = useStyles();
  const fixedMidHeightPaper = clsx(classes.paper, classes.fixedMidHeight);
  const fixedMinHeightPaper = clsx(classes.paper, classes.fixedMinHeight);
  const fixedMaxHeightPaper = clsx(classes.paper, classes.fixedMaxHeight);

  return (
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="xl" className={classes.container}>
          <Grid container spacing={2}>
            {/* Number Card */}
            <Grid item xs={3} md={3} lg={3}>
              <Paper className={fixedMinHeightPaper}>
                <NumberCard name='Production Volume 2019' value='1,480,000,000 units'/>
              </Paper>
            </Grid>
            {/* Number Card */}
            <Grid item xs={3} md={3} lg={3}>
              <Paper className={fixedMinHeightPaper}>
                <NumberCard name='Global smartphone sales' value='$ 522 billion USD'/>
              </Paper>
            </Grid>
            {/* Number Card */}
            <Grid item xs={3} md={3} lg={3}>
              <Paper className={fixedMinHeightPaper}>
                <NumberCard name='Best seller in 2019 Q1' value='iPhoneXR: 11.57 million units'/>
              </Paper>
            </Grid>
            {/* Number Card */}
            <Grid item xs={3} md={3} lg={3}>
              <Paper className={fixedMinHeightPaper}>
                <NumberCard name='Smartphone average price in 2019' value='$ 684.8 USD'/>
              </Paper>
            </Grid>
            {/* Stacked Bar Chart */}
            <Grid item xs={12} md={7} lg={7}>
              <Paper className={fixedMaxHeightPaper}>
                <BarChart dataURL='http://localhost:4000/androidvsios' />
              </Paper>
            </Grid>
            {/* Pie Chart */}
            <Grid item xs={12} md={5} lg={5}>
              <Paper className={fixedMaxHeightPaper}>
                <PieChart dataURL='http://localhost:4000/marketshare' />
              </Paper>
            </Grid>
            {/* Line Chart */}
            <Grid item xs={12} md={7} lg={7}>
              <Paper className={fixedMaxHeightPaper}>
                <LineChart dataURL='http://localhost:4000/globalshipmentbyvendor' />
              </Paper>
            </Grid>
            {/* Radar Chart */}
            <Grid item xs={12} md={5} lg={5}>
              <Paper className={fixedMaxHeightPaper}>
                <RadarChart />
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
