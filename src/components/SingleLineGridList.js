import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import PageviewIcon from '@material-ui/icons/Pageview';
// import Title from './Title';
import Grid from '@material-ui/core/Grid';
//import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  img: {
    width: 150,
  },
  gridList: {
    flexWrap: 'nowrap',
    width: 1800,
    height: 500,
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));

function SingleLineGridList(props) {
  const classes = useStyles();
  const tileData = props.data
  //const gridListFixedImg = clsx(classes.img, classes.gridList);

  return (
    <React.Fragment>
        {/* <Title>Top 10 Best Selling Models</Title> */}
        <GridList className={classes.gridList} cols={8} spacing={5}>
        {/* <GridList className={gridListFixedImg} cols={5} spacing={5}> */}
            {tileData.map(tile => (
            <GridListTile key={tile.img} rows={1.5}>>
            <Grid container justify='center'><img className={classes.img} src={tile.img} alt={tile.title}/></Grid>
                <GridListTileBar
                title={tile.rank + '.' + tile.title}
                classes={{
                    root: classes.titleBar,
                    title: classes.title,
                    imgFullWidth: classes.title,
                }}
                actionIcon={
                    <IconButton 
                        aria-label={`star ${tile.title}`}
                        href={tile.url}
                        target="_blank"
                    >
                    <PageviewIcon className={classes.title} />
                    </IconButton>
                }
                />
            </GridListTile>
            ))}
        </GridList>
        </React.Fragment>
  );
}

// export default withStyles(styles)(SingleLineGridList)
export default SingleLineGridList