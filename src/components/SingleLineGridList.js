import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import PageviewIcon from '@material-ui/icons/Pageview';
import Title from './Title';
import { withStyles } from '@material-ui/core/styles';

// const styles = {
//     img: {
//         width: 225,
//         height: 225,
//     },
// };

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    // flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  img: {
    width: 200,
    height: 200,
  },
  gridList: {
    flexWrap: 'nowrap',
    width: 1200,
    height: 500,
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    // transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  imgFullWidth: {
    width: '80%',
  }
}));

function SingleLineGridList(props) {
  const classes = useStyles();
  const tileData = props.data
  return (
    <React.Fragment>
        <Title>Top 10 Best Selling Models</Title>
        <GridList className={classes.gridList} cols={5} spacing={5}>
            {tileData.map(tile => (
            <GridListTile key={tile.img} rows={1.6}>>
                <img src={tile.img} alt={tile.title}/>
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